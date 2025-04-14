import { generateEmailHtml } from "@/utils/generateEmailHtml";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { escapeHtml } from "@/utils";

import { contactFormSchema } from "@/schemes";

let transporter: nodemailer.Transporter;

async function getTransporter(): Promise<nodemailer.Transporter> {
	if (transporter && (await transporter.verify())) {
		return transporter;
	}

	if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USERNAME || !process.env.SMTP_PASSWORD) {
		throw new Error("SMTP credentials are not configured");
	}

	transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		requireTLS: true,
		secure: false,
		logger: true,
		auth: {
			user: process.env.SMTP_USERNAME,
			pass: process.env.SMTP_PASSWORD,
		},
		connectionTimeout: 10000,
		socketTimeout: 10000,
		greetingTimeout: 5000,
	});

	return transporter;
}

export async function POST(request: Request): Promise<NextResponse> {
	try {
		const jsonData = await request.json();

		const validation = contactFormSchema.safeParse(jsonData);

		if (!validation.success) {
			return NextResponse.json(
				{ success: false, message: "Validation failed", errors: validation.error.errors },
				{ status: 400 },
			);
		}

		const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				secret: process.env.RECAPTCHA_SECRET_KEY || "",
				response: validation.data.recaptchaToken,
			}),
		});

		const recaptchaData = await recaptchaResponse.json();

		if (!recaptchaData.success || recaptchaData.score < 0.5) {
			return NextResponse.json({ success: false, message: "reCAPTCHA verification failed" }, { status: 400 });
		}

		const formData = validation.data;
		const transporter = await getTransporter();

		const date = new Date().toDateString();

		const mailOptions = {
			from: `"${escapeHtml(formData.author)}" <${process.env.FROM_EMAIL_USERNAME}>`,
			to: process.env.TO_EMAIL_USERNAME,
			subject: `New message from ${escapeHtml(formData.author)} - ${date}`,
			text: formData.message,
			html: generateEmailHtml(formData),
			date: new Date(),
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json({ success: true, message: `Message sent successfully` }, { status: 200 });
	} catch (error: unknown) {
		const errorResponse = {
			success: false,
			message: "Failed to send message. Try again later",
			error: "Unknown error",
		};

		if (error instanceof Error) {
			errorResponse.error = error.message;
			errorResponse.message = error.message;

			if (error.message.includes("Invalid login") || error.message.includes("Authentication failed")) {
				errorResponse.message = "Server error: Mail authentication failed";
			} else if (error.message.includes("ENOTFOUND")) {
				errorResponse.message = "Server error: Mail service unavailable";
			} else if (error.message.includes("Email credentials are not configured")) {
				errorResponse.message = "Server error: Mail service not configured";
			}
		}

		return NextResponse.json(errorResponse, { status: 500 });
	}
}
