import { JSX } from "react";

export const NagivationArrow = ({ isDisabled, rotate }: { isDisabled: boolean; rotate?: boolean }): JSX.Element => {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			transform={rotate ? "scale(-1 1)" : ""}
		>
			<path
				opacity={isDisabled ? "0.5" : "1"}
				fill={!isDisabled ? "#fc85ae" : "#574b90"}
				d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414"
			/>
		</svg>
	);
};
