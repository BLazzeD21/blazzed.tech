// middleware.ts
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

const allowedOrigins = [
	process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`, // Автоматическое определение Vercel URL
	process.env.NEXT_PUBLIC_DOMAIN,
	"https://localhost",
	"https://localhost:5500",
	"http://localhost",
	"http://localhost:5500",
].filter(Boolean) as string[];

const corsOptions = {
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
	"Access-Control-Allow-Credentials": "true",
};

export async function middleware(request: NextRequest): Promise<NextResponse<unknown>> {
	if (request.nextUrl.pathname.startsWith("/api")) {
		const origin = request.headers.get("origin") ?? "";
		const isAllowedOrigin = allowedOrigins.some(
			(allowed) =>
				origin === allowed ||
				origin.startsWith(allowed) ||
				(process.env.NODE_ENV === "development" && origin.includes("localhost")),
		);

		if (request.method === "OPTIONS") {
			const headers = {
				...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
				...corsOptions,
			};
			return new NextResponse(null, { headers });
		}

		const response = NextResponse.next();
		if (isAllowedOrigin) {
			response.headers.set("Access-Control-Allow-Origin", origin);
		}
		Object.entries(corsOptions).forEach(([key, value]) => {
			response.headers.set(key, value);
		});
		return response;
	}

	return intlMiddleware(request);
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
