import React from 'react';

import { VineSliderProps } from './VineSliderProps';

import './VineSlider.css';

export function VineSlider(props: VineSliderProps) {
	const { vines } = props;

	return (
		<div className="VineSlider">
			{JSON.stringify(vines)}
		</div>
	);
}