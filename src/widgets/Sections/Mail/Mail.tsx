import { useTranslations } from "next-intl";
import { JSX } from "react";

import styles from "./mail.module.css";

import { MailProps } from "./mail.props";

import { Title } from "@/shared/UI";

import { MailForm } from "@/widgets";

import { FooterWave, MailWave } from "@/widgets/Waves";

export const Mail = ({ locale }: MailProps): JSX.Element => {
	const text = useTranslations("Mail");

	return (
		<section className={styles.stack}>
			<MailWave />
			<div className="container" id="mail">
				<div className="flex">
					<Title Tag="h3" size="18" darkPinkCircle isCircleCenter>
						{text("label")}
					</Title>
					<Title Tag="h3" size="48" className={styles.title}>
						{text("title")}
					</Title>
					<div className="divider darkPink"></div>
					<MailForm locale={locale} />
				</div>
			</div>
			<FooterWave />
		</section>
	);
};
