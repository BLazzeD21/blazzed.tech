"use client";

import classNames from "classnames";
import { JSX, useCallback, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import styles from "./experienceSlider.module.css";

import { ExperienceSliderProps } from "./experienceSlider.props";

import { NagivationArrow } from "@/shared/Icons";

import { ExperienceBlock } from "@/widgets/Blocks";

export const ExperienceSlider = ({ workExperience }: ExperienceSliderProps): JSX.Element => {
	const swiperRef = useRef<SwiperRef>(null);

	const [isEnd, setIsEnd] = useState<boolean>(false);
	const [isBeginning, seIsBeginning] = useState<boolean>(true);

	const handlePrev = useCallback(() => {
		if (!swiperRef.current) return;
		swiperRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!swiperRef.current) return;
		swiperRef.current.swiper.slideNext();
	}, []);

	return (
		<div className={styles.container}>
			<Swiper
				ref={swiperRef}
				slidesPerView={1}
				modules={[Navigation]}
				spaceBetween={10}
				className={styles.swiper}
				onSlideChange={() => {
					if (!swiperRef.current) return;
					seIsBeginning(swiperRef.current.swiper.isBeginning);
					setIsEnd(swiperRef.current.swiper.isEnd);
				}}
			>
				{workExperience.map((work, index) => {
					return (
						<SwiperSlide key={index}>
							<ExperienceBlock workExperience={work} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			{workExperience.length !== 1 && (
				<div className={styles.navigation}>
					<div
						onClick={handlePrev}
						className={classNames({
							[styles.active]: !isBeginning,
						})}
					>
						<NagivationArrow isDisabled={isBeginning} />
					</div>
					<div
						onClick={handleNext}
						className={classNames({
							[styles.active]: !isEnd,
						})}
					>
						<NagivationArrow isDisabled={isEnd} rotate />
					</div>
				</div>
			)}
		</div>
	);
};
