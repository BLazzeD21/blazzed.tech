import { DetailedHTMLProps, HTMLAttributes } from "react";

import { WorkExperienceType } from "@/types";

export interface ExperienceBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	workExperience: WorkExperienceType;
}
