import classNames from "classnames";
import { JSX } from "react";

import styles from "./button.module.css";

import { ButtonProps } from "./button.props";

export const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={classNames(className, styles.button)} {...props}>
			{children}
		</button>
	);
};
