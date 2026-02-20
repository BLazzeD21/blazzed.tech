"use client";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import { JSX, useState } from "react";
import { useForm } from "react-hook-form";
import { Turnstile, useTurnstile } from "react-turnstile";

import styles from "./mailForm.module.css";

import { MailFormProps } from "./mailForm.props";

import { Button } from "@/shared/UI";

import { FormData } from "@/types";

import { useWindowSize } from "@/hooks";

const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY;

export const MailForm = ({ locale }: MailFormProps): JSX.Element => {
	const text = useTranslations("MailForm");

	const turnstile = useTurnstile();

	const [token, setToken] = useState("");

	const [isPending, setIsPending] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const { width } = useWindowSize();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>();

	const handleChange = (): void => {
		if (success) setSuccess(null);
		if (error) setError(null);
	};

	const onSubmit = (data: FormData): void => {
		setIsPending(true);
		setError(null);
		setSuccess(null);

		fetch("/api/mail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...data,
				lang: locale,
				cloudflareToken: token,
			}),
		})
			.then(async (res) => {
				const response = await res.json();

				if (!res.ok) {
					throw new Error(response.message || text("submitError"));
				}
				return response;
			})
			.then(() => {
				setSuccess(text("submitSuccess"));
				reset();
			})
			.catch((err) => {
				setError(err.message || text("submitError"));
			})
			.finally(() => {
				setIsPending(false);
				turnstile.reset();
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			{error && <div className={styles.errorBlock}>{error}</div>}
			{success && <div className={styles.successBlock}>{success}</div>}
			<div className={styles.formBlock}>
				<div className={styles.formGroup}>
					<label htmlFor="author" className={styles.label}>
						{text("nameLabel")}
					</label>
					<input
						id="author"
						type="text"
						{...register("author", {
							required: text("requiredField"),
							minLength: {
								value: 5,
								message: text("minLength", { value: 5 }),
							},
							maxLength: {
								value: 100,
								message: text("maxLength", { value: 100 }),
							},
						})}
						onChange={handleChange}
						className={styles.input}
						disabled={isPending}
					/>
					{errors.author && <p className={styles.error}>{errors.author.message}</p>}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="address" className={styles.label}>
						{text("emailLabel")}
					</label>
					<input
						id="address"
						type="email"
						{...register("address", {
							required: text("requiredField"),
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: text("invalidEmail"),
							},
							maxLength: {
								value: 255,
								message: text("maxLength", { value: 255 }),
							},
						})}
						onChange={handleChange}
						className={styles.input}
						disabled={isPending}
					/>
					{errors.address && <p className={styles.error}>{errors.address.message}</p>}
				</div>

				<div className={classNames(styles.formGroup, styles.message)}>
					<label htmlFor="message" className={styles.label}>
						{text("messageLabel")}
					</label>
					<textarea
						id="message"
						{...register("message", {
							required: text("requiredField"),
							minLength: {
								value: 20,
								message: text("minLength", { value: 20 }),
							},
							maxLength: {
								value: 5000,
								message: text("maxLength", { value: 5000 }),
							},
						})}
						rows={6}
						onChange={handleChange}
						className={styles.textarea}
						disabled={isPending}
					/>
					{errors.message && <p className={styles.error}>{errors.message.message}</p>}
				</div>
			</div>
			{siteKey && width && !success && (
				<div className={styles.reCAPTCHA}>
					<Turnstile
						theme="light"
						sitekey={siteKey}
						language={locale}
						onVerify={setToken}
						size={width < 360 ? "compact" : "normal"}
					/>
				</div>
			)}
			{!success && (
				<Button type="submit" disabled={isPending} className={styles.button}>
					{isPending ? text("sending") : text("sendButton")}
				</Button>
			)}
		</form>
	);
};
