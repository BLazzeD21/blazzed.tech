import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import styles from "./experienceBlock.module.css";

import { ExperienceBlockProps } from "./experienceBlock.props";

import { DateIcon, LocationIcon, RoleIcon } from "@/shared/Icons";
import { P } from "@/shared/UI";

import { refactorDate } from "@/utils";

export const ExperienceBlock = ({ workExperience }: ExperienceBlockProps): JSX.Element => {
	const nowDate = refactorDate(workExperience.date_start);

	const dateText = !workExperience.date_end
		? `${nowDate} - now`
		: `${nowDate} - ${refactorDate(workExperience.date_end)}`;

	return (
		<div className={styles.container}>
			<div className={styles.block}>
				<P className={styles.company}>{workExperience.company}</P>
				<div className={styles.row}>
					<LocationIcon />
					<P className={styles.location}>{workExperience.location}</P>
				</div>
			</div>
			<div className={styles.block}>
				<div className={styles.row}>
					<RoleIcon />
					<P className={styles.role}>{workExperience.role}</P>
				</div>
				<div className={styles.row}>
					<DateIcon />
					<P className={styles.date}>{dateText}</P>
				</div>
			</div>
			<div className={classNames(styles.block, styles.experienceBlock)}>
				<P className={styles.experience}>{workExperience.description}</P>
				<div className={styles.footer}>
					<div className={styles.tags}>
						{workExperience.tags.map((tag, index) => {
							return (
								<Link key={index} href={tag.href} className={styles.tag} target="_blank">
									<Image src="/icons/tag.svg" alt={tag.label} width={12} height={12} />
									{tag.label}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
