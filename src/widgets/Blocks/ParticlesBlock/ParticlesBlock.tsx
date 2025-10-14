"use client";

import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { JSX, useEffect, useMemo, useState } from "react";

import styles from "./particlesBlock.module.css";

import { ParticlesBlockProps } from "./particlesBlock.props";

export const ParticlesBlock = ({ speed = 4, value = 175 }: ParticlesBlockProps): JSX.Element => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (): Promise<void> => {
		return;
	};

	const options: ISourceOptions = useMemo(
		() => ({
			fullScreen: false,
			fpsLimit: 144,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 1,
					},
					repulse: {
						distance: 100,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 200,
					enable: true,
					opacity: 1,
					width: 0.5,
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.out,
					},
					random: true,
					speed: speed,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: value,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[value, speed],
	);

	if (init) {
		return (
			<Particles id="tsparticles" className={styles.particles} particlesLoaded={particlesLoaded} options={options} />
		);
	}

	return <div className={styles.particles}></div>;
};
