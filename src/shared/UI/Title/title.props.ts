import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface subTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
	size?: "15" | "16" | "18" | "20" | "22" | "36" | "48" | "56" | "72";
	Tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	darkPinkCircle?: boolean;
	navyBlueCircle?: boolean;
	isCircleCenter?: boolean;
}
