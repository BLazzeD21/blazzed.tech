import { useTranslations } from "next-intl";
import { JSX } from "react";

import styles from "./portfolio.module.css";

import { PortfolioProps } from "./portfolio.props";

import { Title } from "@/shared/UI";

import { PortfolioBlock } from "@/widgets/Blocks";
import { StackWave } from "@/widgets/Waves";

export const Portfolio = ({ portfolioItems }: PortfolioProps): JSX.Element => {
	const text = useTranslations("Portfolio");

	return (
		<section className={styles.portfolio}>
			<StackWave />
			<div className="container" id="portfolio">
				<div className="flex">
					<Title Tag="h3" size="18" darkPinkCircle isCircleCenter>
						{text("label")}
					</Title>
					<Title Tag="h3" size="48" className={styles.title} isShadow>
						{text("title")}
					</Title>
					<div className="divider darkPink"></div>
					<div className={styles.wrapper}>
						{portfolioItems.map((item, index) => {
							return <PortfolioBlock item={item} soonText={text("soon")} key={index} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
