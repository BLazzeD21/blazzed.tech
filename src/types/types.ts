export type LocaleKeys = "en" | "ru" | "de" | "fi" | "zh" | "es" | "fr" | "ar" | "pt";

export type Locale<T> = Record<LocaleKeys, T[]>;

export enum Levels {
	Intermediate = "Intermediate",
	Basic = "Basic",
	Advanced = "Advanced",
}

export interface PortfolioItemType {
	githubLink?: string;
	projectLink?: string;
	imageSrc?: string;
	altText: string;
	gridColumn?: string;
	gridRow?: string;
}

export interface RatingType {
	percentage: number;
	name: string;
}

export interface SocialLinkType {
	link: string;
	name: string;
	asideIcon: string;
	contactsIcon: string;
}

export type SkillType = {
	name: string;
	imageSrc: string;
	level: Levels;
};

export type SkillCategory = SkillType[];

export type StackType = {
	Databases: SkillCategory;
	Languages: SkillCategory;
	"Frameworks, Platforms and Libraries": SkillCategory;
	Other: SkillCategory;
};

export interface SkillsListType {
	title: string;
	imageSrc: string;
	description: string;
}

export interface EducationType {
	imageUrl: string;
	name: string;
	location: string;
	body: string;
}

export type Tag = {
	label: string;
	href: string;
};

export interface WorkExperienceType {
	date_start: Date;
	date_end: Date | null;
	company: string;
	role: string;
	location: string;
	description: string;
	tags: Tag[];
}

export interface InternalLinkType {
	href: string;
	name: string;
}

export interface SocialLinkType {
	link: string;
	name: string;
	asideIcon: string;
	contactsIcon: string;
}

export interface ContactFormData {
	author: string;
	message: string;
	address: string;
	recaptchaToken: string;
}
