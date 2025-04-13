import { useTranslations } from "next-intl";
import Link from "next/link";
import { JSX } from "react";

import styles from "./footer.module.css";

import { FooterProps } from "./footer.props";

import { LinkButton } from "@/shared/UI";

import { SocialLink } from "@/widgets";

export const Footer = ({ socialLinks, internalLinks }: FooterProps): JSX.Element => {
	const year = new Date().getFullYear();

	const text = useTranslations("Footer");

	const [mailSubject, mailBody] = [text("mailSubject"), text("mailBody")];

	return (
		<>
			<footer className={styles.footer} id="footer">
				<div className="container flex">
					<p className={styles.quote}>{text("quote")}</p>
					<div className="divider"></div>
					<div className={styles.social}>
						{socialLinks.map((socilLink, index) => (
							<SocialLink key={`footerLink-${index}`} item={socilLink} className={styles.socialLink} />
						))}
					</div>
					<div className={styles.buttons}>
						<LinkButton buttonStyle="navyBlue" link="https://t.me/BlazzeD21" target="_blank">
							{text("contactButton")}
						</LinkButton>
						<LinkButton
							buttonStyle="navyBlue"
							link={`mailto:sekerin.alexandr@gmail.com?subject=${mailSubject}&body=${mailBody}`}
							target="_blank"
						>
							{text("mailButton")}
						</LinkButton>
					</div>
					<div className={styles.menu}>
						<ul className={styles.list}>
							{internalLinks.map((item, index) => (
								<li className={styles.menuItem} key={`footerLinks-${index}`}>
									<Link href={item.href}>{item.name}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.copyright}>
						&copy; {text("copyright", { year: year })}
						<br />
						{text("google")}&nbsp;
						<Link href="https://policies.google.com/privacy">{text("policy")}</Link>&nbsp;
						{text("and")}&nbsp;
						<Link href="https://policies.google.com/terms">{text("terms")}</Link>&nbsp;
						{text("apply")}
					</div>
				</div>
			</footer>
		</>
	);
};
