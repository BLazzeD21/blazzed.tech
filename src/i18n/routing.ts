import { defineRouting } from "next-intl/routing";

export const allowedLangs = ["en", "ru", "de", "fi", "zh", "es", "fr", "ar", "pt"] as const;

export const routing = defineRouting({
	locales: allowedLangs,
	defaultLocale: "en",
	pathnames: {
		"/": "/",
	},
});
