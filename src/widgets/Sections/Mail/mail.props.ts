import { DetailedHTMLProps, HTMLAttributes } from "react";

import { LocaleKeys } from "@/types";

export interface MailProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	locale: LocaleKeys;
}
