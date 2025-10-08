"use client";

import { JSX, useEffect, useRef, useState } from "react";

import styles from "./ratingBlock.module.css";

import { RatingBlockProps } from "./ratingBlock.props";

import { P, Title } from "@/shared/UI";

export const RatingBlock = ({ percentage, name }: RatingBlockProps): JSX.Element => {
	const spanRef = useRef<HTMLSpanElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const spanElement = spanRef.current;

		if (!spanElement) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.unobserve(spanElement);
					}
				});
			},
			{
				threshold: 0.8,
			},
		);

		observer.observe(spanElement);

		return (): void => {
			observer.unobserve(spanElement);
		};
	}, []);

	useEffect(() => {
		if (isVisible && spanRef.current) {
			spanRef.current.style.width = "0%";

			setTimeout(() => {
				if (spanRef.current) {
					spanRef.current.style.width = `${percentage}%`;
				}
			}, 100);
		}
	}, [isVisible, percentage]);

	return (
		<div className={styles.item}>
			<Title size="16" Tag="h6" navyBlueCircle className={styles.title}>
				{name}
			</Title>
			<P color="white" size="20">
				{percentage}%
			</P>
			<div className={styles.line}>
				<span ref={spanRef}></span>
			</div>
		</div>
	);
};
