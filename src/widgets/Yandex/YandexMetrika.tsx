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
			if (enabled && YM_COUNTER_ID) {
				try {
					ym("hit", url);
				} catch (error) {
					console.warn("Yandex Metrika hit error:", error);
				}
			} else {
				console.log(`%c[YandexMetrika](HIT)`, `color: orange`, url);
			}
		},
		[enabled],
	);

	useEffect(() => {
		if (!enabled || !YM_COUNTER_ID) return;

		hit(window.location.pathname + window.location.search);

		const handleRouteChange = (url: string): void => {
			hit(url);
		};

		Router.events.on("routeChangeComplete", handleRouteChange);

		return (): void => {
			Router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [hit, enabled]);

	if (!enabled || !YM_COUNTER_ID) {
		console.log(`%c[YandexMetrika]`, `color: gray`, "Disabled or no counter ID");
		return null;
	}

	return (
		<YMInitializer
			accounts={[YM_COUNTER_ID]}
			options={{
				defer: true,
				webvisor: true,
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				triggerEvent: true,
				trackHash: false,
			}}
			version="2"
		/>
	);
};
