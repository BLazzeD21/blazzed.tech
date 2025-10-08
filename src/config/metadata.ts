import { Metadata } from "next";

type GetMetaDataProps = {
	applicationName: string;
	keywords: string[];
	name: string;
	title: string;
	description: string;
	baseDomain: string | undefined;
	vercelDomain: string | undefined;
};

export const GetMetadata = ({
	applicationName,
	keywords,
	name,
	title,
	description,
	baseDomain,
	vercelDomain,
}: GetMetaDataProps): Metadata => {
	const domain = vercelDomain || baseDomain || "";

	return {
		metadataBase: new URL(domain),
		applicationName: applicationName,
		keywords: keywords,
		authors: { name: name, url: domain },
		title: title,
		description: description,
		alternates: {
			canonical: baseDomain,
			languages: {
				en: "/en",
				ru: "/ru",
				de: "/de",
				fi: "/fi",
				zh: "/zh",
				es: "/es",
				fr: "/fr",
				ar: "/ar",
				pt: "/pt",
				"x-default": baseDomain,
			},
		},
		robots: { index: true, follow: true },
		icons: {
			icon: [
				{ url: "/metadata/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
				{ url: "/metadata/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			],
			apple: [
				{ url: "/metadata/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
				{ url: "/metadata/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
				{ url: "/metadata/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
				{ url: "/metadata/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
				{ url: "/metadata/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
				{ url: "/metadata/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
				{ url: "/metadata/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
				{ url: "/metadata/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
				{ url: "/metadata/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
			],
			other: [
				{
					rel: "icon",
					url: "/metadata/favicon/android-icon-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
			],
		},
		manifest: "/metadata/favicon/manifest.json",
		openGraph: {
			type: "website",
			url: domain,
			title: title,
			description: description,
			images: [
				{
					url: "/metadata/metadata.jpg",
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: title,
			description: description,
			images: ["/metadata/metadata.jpg"],
		},
		other: {
			"msapplication-TileColor": "#ffffff",
			"msapplication-TileImage": "/metadata/favicon/ms-icon-144x144.png",
		},
	};
};
