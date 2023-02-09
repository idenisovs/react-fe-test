import React from 'react';
import { Link } from 'react-router-dom';

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
				<Link to={`/learn/${wine.id}`} className="WineCard--Actions__Link">
					Learn <i className="material-symbols-outlined">arrow_forward_ios</i>
				</Link>
				<Link to={`/shop/${wine.id}`} className="WineCard--Actions__Link">
					Shop <i className="material-symbols-outlined">arrow_forward_ios</i>
				</Link>
			</footer>
		</section>
	);
}