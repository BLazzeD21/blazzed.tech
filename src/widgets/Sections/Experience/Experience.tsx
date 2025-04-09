import { useTranslations } from "next-intl";
import { JSX } from "react";

import styles from "./experience.module.css";

import { Title } from "@/shared/UI";

import { ExperienceWave } from "@/widgets/Waves";

export const Experience = (): JSX.Element => {
	const text = useTranslations("Experience");

	return (
		<section className={styles.stack}>
			<ExperienceWave />
			<div className="container" id="experience">
				<div className="flex">
					<Title Tag="h3" size="18" navyBlueCircle isCircleCenter>
						{text("label")}
					</Title>
					<Title Tag="h3" size="48" className={styles.title}>
						{text("title")}
					</Title>
					<div className="divider"></div>
				</div>
			</div>
		</section>
	);
};
