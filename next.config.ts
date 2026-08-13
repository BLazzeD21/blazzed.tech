import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
	experimental: {
		createMessagesDeclaration: "./messages/en.json",
	},
});

const config: NextConfig = {
	async headers() {
		return [
			{
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{
						key: "Access-Control-Allow-Origin",
						value:
							process.env.NEXT_PUBLIC_DOMAIN || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""),
					},
					{ key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
					{ key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
					{ key: "Vary", value: "Origin" },
				],
			},
		];
	},
};

export default withNextIntl(config);
