import { DetailedHTMLProps, HTMLAttributes } from "react";

import { WorkExperienceType } from "@/types";

export interface ExperienceSliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	workExperience: WorkExperienceType[];
}
