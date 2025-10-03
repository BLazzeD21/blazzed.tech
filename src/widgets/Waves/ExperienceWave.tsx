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
				preserveAspectRatio="none"
			>
				<path d="m1440 160-80-21.3c-80-21.7-240-63.7-400-37.4C800 128 640 224 480 234.7 320 245 160 171 80 133.3L0 96V0h1440z" />
			</svg>
		</div>
	);
};
