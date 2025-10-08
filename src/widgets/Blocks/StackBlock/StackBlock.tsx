import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { JSX } from "react";

import styles from "./stackBlock.module.css";

import { StackBlockProps } from "./stackBlock.props";

const levelClasses = {
	Basic: styles.basic,
	Intermediate: styles.intermediate,
	Advanced: styles.advanced,
};

export const StackBlock = ({ name, imageSrc, level }: StackBlockProps): JSX.Element => {
	const levels = useTranslations("Skills");

	return (
		<div className={styles.item}>
			<div className={styles.img}>
				<Image src={imageSrc} alt={name} height={75} width={75} />
			</div>
			<div className={styles.name}>{name}</div>
			<div className={classNames(styles.level, levelClasses[level])}>{levels(level)}</div>
		</div>
	);
};
