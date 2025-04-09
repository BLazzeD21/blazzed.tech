import classNames from "classnames";
import { JSX } from "react";

import styles from "./waves.module.css";

export const MailWave = (): JSX.Element => {
	return (
		<div className={classNames(styles.navyBlueBackground, styles.transformUp)}>
			<svg
				className={styles.darkPink}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				transform="rotate(180)"
				preserveAspectRatio="none"
			>
				<path d="m0 128 60 21.3c60 21.7 180 63.7 300 53.4C480 192 600 128 720 117.3 840 107 960 149 1080 160s240-11 300-21.3l60-10.7v192H0Z" />
			</svg>
		</div>
	);
};
