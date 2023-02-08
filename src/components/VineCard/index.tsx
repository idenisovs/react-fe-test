import React from 'react';
import { VineCardProps } from './VineCardProps';

import './VineCard.css';

export function VineCard(props: VineCardProps) {
	const { vine } = props;

	return (
		<section className="VineCard">
			<header>
				<h2 className="VineCard--Label">
					{vine.name}
				</h2>
				<small className="VineCard--Type">
					{vine.type}
				</small>
			</header>
			<main className="VineCard--Picture">
				<img src="./vino-1.1.png" alt="vino-1.1.png" />
			</main>
			<footer className="VineCard--Actions">
				<span>
					Learn 〉
				</span>
				<span>
					Shop 〉
				</span>
			</footer>
		</section>
	);
}