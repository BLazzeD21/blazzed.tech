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
				preserveAspectRatio="none"
			>
				<path d="M1440,160l-80-21.3c-80-21.7-240-63.7-400-37.4-160,26.7-320,122.7-480,133.4-160,10.3-320-63.7-400-101.4L0,96V0h1440v160Z" />
			</svg>
		</div>
	);
};
