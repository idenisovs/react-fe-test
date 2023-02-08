import React from 'react';

import { VineSliderProps } from './VineSliderProps';
import { VineCard } from '../VineCard';

import './VineSlider.css';

export function VineSlider(props: VineSliderProps) {
	const { vines } = props;

	return (
		<div className="VineSlider">
			{vines.map((vine) => <VineCard key={vine.id} vine={vine} />)}
		</div>
	);
}