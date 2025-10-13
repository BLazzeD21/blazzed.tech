import { useTranslations } from "next-intl";
import { JSX } from "react";

import styles from "./education.module.css";

import { EducationProps } from "./education.props";

import { Title } from "@/shared/UI";

import { EducationBlock } from "@/widgets/Blocks";
import { AboutMeWave } from "@/widgets/Waves";

export const Education = ({ higherEducation, additionalEducation }: EducationProps): JSX.Element => {
	const educationText = useTranslations("Education");

	return (
		<section className={styles.education}>
			<AboutMeWave />
			<div className="container" id="education">
				<div className="flex">
					<Title Tag="h3" size="18" darkPinkCircle isCircleCenter>
						{educationText("label")}
					</Title>
					<Title Tag="h3" size="48" className={styles.title} isShadow>
						{educationText("title")}
					</Title>
					<div className="divider darkPink"></div>
					<div className={styles.wrapper}>
						<div className={styles.column}>
							<Title size="20" Tag="h4" isShadow>
								{educationText("higherEducation.title")}
							</Title>
							<ul>
								{higherEducation.map((education, index) => (
									<li key={`higherEducation-${index}`}>
										<EducationBlock
											imageUrl={education.imageUrl}
											name={education.name}
											location={education.location}
											body={education.body}
										/>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.column}>
							<Title size="20" Tag="h4" isShadow>
								{educationText("additionalEducation.title")}
							</Title>
							<ul>
								{additionalEducation.map((education, index) => (
									<li key={`additionalEducation-${index}`}>
										<EducationBlock
											imageUrl={education.imageUrl}
											name={education.name}
											location={education.location}
											body={education.body}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
