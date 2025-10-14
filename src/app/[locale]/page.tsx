import { setRequestLocale } from "next-intl/server";
import { JSX, use } from "react";

import { PageUp, Sidepanel } from "@/widgets";

import { AboutMe, Education, Experience, Footer, Header, Mail, Portfolio, Stack } from "@/widgets/Sections";

import { LocaleKeys } from "@/types";

import {
	additionalEducation,
	higherEducation,
	internalLinks,
	portfolioItems,
	ratings,
	skillsList,
	socialLinks,
	stack,
	workExperience,
} from "@/constants";

type Props = {
	params: Promise<{ locale: LocaleKeys }>;
};

export default function IndexPage({ params }: Props): JSX.Element {
	const { locale } = use(params);

	setRequestLocale(locale);

	return (
		<>
			<Sidepanel socialLinks={socialLinks} />
			<Header socialLinks={socialLinks} internalLinks={internalLinks[locale]} />
			<AboutMe skillsList={skillsList[locale]} />
			<Education higherEducation={higherEducation[locale]} additionalEducation={additionalEducation[locale]} />
			<Experience workExperience={workExperience[locale]} />
			<Portfolio portfolioItems={portfolioItems} />
			<Stack ratings={ratings[locale]} stack={stack} />
			<Mail locale={locale} />
			<Footer internalLinks={internalLinks[locale]} socialLinks={socialLinks} />
			<PageUp />
		</>
	);
}
