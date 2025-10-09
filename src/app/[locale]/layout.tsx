import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, Viewport } from "next";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nunito, Quicksand } from "next/font/google";
import { notFound } from "next/navigation";
import { JSX, ReactNode } from "react";

import "../globals.css";

import { GetMetadata } from "@/config";

import { routing } from "@/i18n/routing";

import { YandexMetrikaContainer } from "@/widgets/Yandex";

import { LocaleKeys } from "@/types";

const analyticsEnabled = !!(process.env.NODE_ENV === "production");

type Props = {
	children: ReactNode;
	params: Promise<{ locale: Locale }>;
};

const quicksand = Quicksand({
	subsets: ["latin"],
	variable: "--font-quicksand",
	weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
	subsets: ["cyrillic"],
	variable: "--font-nunito",
	weight: ["400", "500", "600", "700"],
});

export function generateStaticParams(): Array<{ locale: LocaleKeys }> {
	return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
	themeColor: "white",
};

export async function generateMetadata(props: Omit<Props, "children">): Promise<Metadata> {
	const { locale } = await props.params;

	const text = await getTranslations({ locale, namespace: "MetaData" });

	const textAboutMe = await getTranslations({ locale, namespace: "About" });

	return GetMetadata({
		locale: locale as LocaleKeys,
		applicationName: text("applicationName"),
		keywords: text("keywords").split(","),
		name: text("name"),
		title: text("pageTitle"),
		description: textAboutMe("description"),
		baseDomain: process.env.NEXT_PUBLIC_DOMAIN,
		vercelDomain: process.env.NEXT_PUBLIC_VERCEL_DOMAIN,
	});
}

export default async function LocaleLayout({ children, params }: Props): Promise<JSX.Element> {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale} className={locale !== "ru" ? "quicksand" : "nunito"}>
			<body className={`${locale !== "ru" ? quicksand.variable : nunito.variable} font-sans`}>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
				<SpeedInsights />
				<Analytics />
			</body>
			<YandexMetrikaContainer enabled={analyticsEnabled} />
		</html>
	);
}
