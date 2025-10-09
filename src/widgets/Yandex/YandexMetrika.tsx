"use client";

import Router from "next/router";
import React, { useCallback, useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

type Props = {
	enabled: boolean;
};

const YM_COUNTER_ID = Number(process.env.NEXT_PUBLIC_YANDEX_METRIC_ID);

export const YandexMetrikaContainer: React.FC<Props> = ({ enabled }) => {
	const hit = useCallback(
		(url: string) => {
			if (enabled) {
				ym("hit", url);
			} else {
				console.log(`%c[YandexMetrika](HIT)`, `color: orange`, url);
			}
		},
		[enabled],
	);

	useEffect(() => {
		hit(window.location.pathname + window.location.search);
		Router.events.on("routeChangeComplete", (url: string) => hit(url));
	}, [hit]);

	if (!enabled) return null;

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
