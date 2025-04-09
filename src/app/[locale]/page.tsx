import { setRequestLocale } from "next-intl/server";
import { JSX, use } from "react";

import { CustomCursor, PageUp, Sidepanel } from "@/widgets";

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
} from "@/constants";

type Props = {
	params: Promise<{ locale: LocaleKeys }>;
};

export default function IndexPage({ params }: Props): JSX.Element {
	const { locale } = use(params);

	setRequestLocale(locale);

	return (
		<>
			<CustomCursor />
			<Sidepanel socialLinks={socialLinks} />
			<Header socialLinks={socialLinks} internalLinks={internalLinks[locale]} />
			<AboutMe skillsList={skillsList[locale]} />
			<Education higherEducation={higherEducation[locale]} additionalEducation={additionalEducation[locale]} />
			<Stack ratings={ratings[locale]} stack={stack} />
			<Portfolio portfolioItems={portfolioItems} />
			<Experience />
			<Mail locale={locale} />
			<Footer internalLinks={internalLinks[locale]} socialLinks={socialLinks} />
			<PageUp />
		</>
	);
}
