import { NextResponse } from "next/server";

import { getMailOptions, getTransporter } from "@/config";

import { contactFormSchema } from "@/schemes";

export async function POST(request: Request): Promise<NextResponse> {
	try {
		const SECRET_KEY = process.env.CLOUDFLARE_SECRET_KEY;
		const jsonData = await request.json();

		const validation = contactFormSchema.safeParse(jsonData);

		if (!validation.success) {
			return NextResponse.json(
				{ success: false, message: "Validation failed", errors: validation.error.errors },
				{ status: 400 },
			);
		}

		const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: `secret=${SECRET_KEY}&response=${validation.data.cloudflareToken}`,
		});

		const verifyData = await verifyResponse.json();

		if (!verifyData.success) {
			return NextResponse.json({ success: false, message: "Captcha verification failed" }, { status: 400 });
		}

		const transporter = await getTransporter();

		const mailOptions = await getMailOptions(validation.data);

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
