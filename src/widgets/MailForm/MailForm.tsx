"use client";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import { JSX, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";

import styles from "./mailForm.module.css";

import { MailFormProps } from "./mailForm.props";

import { Button } from "@/shared/UI";

import { useWindowSize } from "@/hooks";

type FormData = {
	author: string;
	message: string;
	address: string;
};

export const MailForm = ({ locale }: MailFormProps): JSX.Element => {
	const text = useTranslations("MailForm");

	const [isPending, setIsPending] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const recaptcha = useRef<ReCAPTCHA>(null);

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
		if (recaptcha.current === null) return;

		setIsPending(true);
		setError(null);
		setSuccess(null);

		const captchaValue = recaptcha.current.getValue();

		if (!captchaValue) {
			setError(text("captchaError"));
			return;
		}

		fetch("/api/mail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...data,
				recaptchaToken: captchaValue,
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
				recaptcha.current?.reset();
				setIsPending(false);
			});
	};

	const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY;

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
			{siteKey && (
				<div className={styles.reCAPTCHA}>
					<ReCAPTCHA
						ref={recaptcha}
						sitekey={siteKey}
						size={width && width < 340 ? "compact" : "normal"}
						hl={locale}
						onExpired={() => recaptcha.current?.reset()}
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
