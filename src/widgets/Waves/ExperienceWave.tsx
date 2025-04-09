import classNames from "classnames";
import { JSX } from "react";

import styles from "./waves.module.css";

export const ExperienceWave = (): JSX.Element => {
	return (
		<div className={classNames(styles.darkPinkBackground, styles.transformUp)}>
			<svg
				className={styles.navyBlue}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				transform="scale(1 -1)"
				preserveAspectRatio="none"
			>
				<path d="m0 160 80 21.3c80 21.7 240 63.7 400 37.4C640 192 800 96 960 85.3c160-10.3 320 63.7 400 101.4l80 37.3v96H0Z" />
			</svg>
		</div>
	);
};
