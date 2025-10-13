import { useTranslations } from "next-intl";
import { JSX } from "react";

import styles from "./stack.module.css";

import { StackProps } from "./stack.props";

import { Title } from "@/shared/UI";

import { Rating, StackAccordion } from "@/widgets";

import { EducationWave } from "@/widgets/Waves";

export const Stack = ({ ratings, stack }: StackProps): JSX.Element => {
	const text = useTranslations("Stack");

	return (
		<section className={styles.stack}>
			<EducationWave />
			<div className="container" id="stack">
				<div className="flex">
					<Title Tag="h3" size="18" navyBlueCircle isCircleCenter>
						{text("label")}
					</Title>
					<Title Tag="h3" size="48" className={styles.title} isShadow>
						{text("title")}
					</Title>
					<div className="divider"></div>
					<StackAccordion stack={stack} />
				</div>
				<Rating ratings={ratings} />
			</div>
		</section>
	);
};
