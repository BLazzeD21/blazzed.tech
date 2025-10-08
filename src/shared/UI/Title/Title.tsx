import classNames from "classnames";
import { JSX } from "react";

import styles from "./Title.module.css";

import { subTitleProps } from "./title.props";

const sizeClasses = {
	"15": styles.fz15,
	"16": styles.fz16,
	"18": styles.fz18,
	"20": styles.fz20,
	"22": styles.fz22,
	"36": styles.fz36,
	"48": styles.fz48,
	"56": styles.fz56,
	"72": styles.fz72,
};

export const Title = ({
	children,
	size = "18",
	darkPinkCircle = false,
	navyBlueCircle = false,
	isCircleCenter = false,
	className,
	Tag = "h2",
	...props
}: subTitleProps): JSX.Element => {
	return (
		<Tag
			className={classNames(styles.title, sizeClasses[size], className, {
				[styles.beforeCircle]: darkPinkCircle || navyBlueCircle,
				[styles.darkPinkCircle]: darkPinkCircle,
				[styles.navyBlueCircle]: navyBlueCircle,
				[styles.center]: isCircleCenter,
			})}
			{...props}
		>
			{children}
		</Tag>
	);
};
