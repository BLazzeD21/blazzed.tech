import Image from "next/image";
import { JSX } from "react";

import styles from "./skillsBlock.module.css";

import { SkillBlockProps } from "./skillBlock.props";

import { P, Title } from "@/shared/UI";

export const SkillBlock = ({ title, imageSrc, description }: SkillBlockProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image src={imageSrc} alt={title} width={30} height={30} />
			</div>
			<div>
				<Title Tag="h3" size="22" className={styles.title}>
					{title}
				</Title>
				<P color="white" size="20" className={styles.description}>
					{description}
				</P>
			</div>
		</div>
	);
};
