"use client";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import { JSX, useState } from "react";

import styles from "./stackAccordion.module.css";

import { StackAccordionProps } from "./stackAccordion.props";

import { StackBlock } from "@/widgets/Blocks";

import { Levels } from "@/types";

import { sortSkillsByLevel } from "@/utils";

export const StackAccordion = ({ stack }: StackAccordionProps): JSX.Element => {
	const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

	const stackTitles = useTranslations("StackTitles");

	const toggleCategory = (category: string): void => {
		setExpandedCategory((prev) => (prev === category ? null : category));
	};

	return (
		<div className={styles.accordion}>
			{Object.entries(stack).map(([category, skills]) => {
				const categoryLocale = stackTitles(category);

				return (
					<div key={categoryLocale} className={styles.category}>
						<button className={styles.header} onClick={() => toggleCategory(categoryLocale)}>
							<span>{categoryLocale}</span>
							<span className={classNames(styles.arrow, { [styles.open]: expandedCategory === categoryLocale })}>
								▼
							</span>
						</button>
						<div className={classNames(styles.content, { [styles.open]: expandedCategory === categoryLocale })}>
							<div className={styles.wrapper}>
								{skills.sort(sortSkillsByLevel).map((technology, index) => (
									<StackBlock
										key={index}
										name={technology.name}
										imageSrc={technology.imageSrc}
										level={Levels[technology.level]}
									/>
								))}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
