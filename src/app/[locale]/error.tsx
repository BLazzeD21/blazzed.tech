"use client";

import { JSX } from "react";

import styles from "./styles.module.css";

import { LinkButton, P, Title } from "@/shared/UI";

export default function Error(): JSX.Element {
	return (
		<div className={styles.page}>
			<P className={styles.background}>zZz</P>
			<Title size="56" Tag="h1">
				Error
			</Title>
			<P size="20">There was an error</P>
			<LinkButton href="/reload" buttonStyle="navyBlue">
				Return Home
			</LinkButton>
		</div>
	);
}
