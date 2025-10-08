"use client";

import { usePathname } from "next/navigation";
import { JSX } from "react";
import { useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

const YM_COUNTER_ID = Number(process.env.NEXT_PUBLIC_YANDEX_METRIC_ID);

export const YandexMetrika = (): JSX.Element => {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname) {
			ym("hit", pathname);
		}
	}, [pathname]);

	return (
		<YMInitializer
			accounts={[YM_COUNTER_ID]}
			options={{
				defer: true,
				webvisor: true,
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
			}}
			version="2"
		/>
	);
};
