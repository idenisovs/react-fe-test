import React from 'react';
import { WineCardProps } from './WineCardProps';

import './WineCard.css';

export function WineCard(props: WineCardProps) {
	const { wine } = props;

	return (
		<section className="WineCard">
			<header>
				<h2 className="WineCard--Label">
					{wine.name}
				</h2>
				<small className="WineCard--Type">
					{wine.type}
				</small>
			</header>

			<main className="WineCard--Picture">
				<img src="./vino-1.1.png" alt="vino-1.1.png" />
			</main>

			<footer className="WineCard--Actions">
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