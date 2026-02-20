import nodemailer from "nodemailer";

import { ContactFormData, MailOptions } from "@/types";

import { escapeHtml, generateEmailHtml } from "@/utils";

let transporter: nodemailer.Transporter;

export const getTransporter = async (): Promise<nodemailer.Transporter> => {
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
};

export const getMailOptions = async (formData: ContactFormData): Promise<MailOptions> => {
	const date = new Date().toDateString();

	const fromEmail = process.env.FROM_EMAIL_USERNAME;
	const toEmail = process.env.TO_EMAIL_USERNAME;

	return {
		from: `"${escapeHtml(formData.author)}" <${fromEmail}>`,
		to: toEmail,
		subject: `New message from ${escapeHtml(formData.author)} - ${date}`,
		text: formData.message,
		html: generateEmailHtml(formData),
		date: new Date(),
	};
};
