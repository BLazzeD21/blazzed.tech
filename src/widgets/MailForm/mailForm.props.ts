import { DetailedHTMLProps, HTMLAttributes } from "react";

import { LocaleKeys } from "@/types";

export interface MailFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	locale: LocaleKeys;
}
