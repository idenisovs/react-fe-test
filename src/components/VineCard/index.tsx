import React from 'react';
import { VineCardProps } from './VineCardProps';

import './VineCard.css';

export function VineCard(props: VineCardProps) {
	const { vine } = props;

	return (
		<div className="VineCard">
			<div>Vine Card</div>
			<div>{vine.name}</div>
			<div>{vine.type}</div>
		</div>
	);
}