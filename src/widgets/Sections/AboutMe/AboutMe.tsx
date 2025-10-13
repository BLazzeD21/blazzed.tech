import { useTranslations } from "next-intl";
import { JSX } from "react";

import styles from "./aboutMe.module.css";

import { AboutMeProps } from "./aboutMe.props";

import { P, Photo, Title } from "@/shared/UI";

import { SkillBlock } from "@/widgets/Blocks";

export const AboutMe = ({ skillsList }: AboutMeProps): JSX.Element => {
	const text = useTranslations("About");

	return (
		<section className={styles.about} id="about">
			<div className="container">
				<div className={styles.wrapper}>
					<Photo />
					<div className={styles.description}>
						<div className={styles.flex}>
							<Title navyBlueCircle Tag="h2">
								{text("label")}
							</Title>
							<Title size="48" Tag="h3" className={styles.title} isShadow>
								{text("title")}
							</Title>
							<div className="divider"></div>
						</div>
						<P className={styles.descriptionText} color="white" size="24">
							{text("description")}
						</P>
					</div>
					<div className={styles.skills}>
						{skillsList.map((skill, index) => {
							return (
								<SkillBlock
									key={`skillsList-${index}`}
									title={skill.title}
									imageSrc={skill.imageSrc}
									description={skill.description}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
