import React from 'react';
import Slider, { Settings } from 'react-slick';

import { VineSliderProps } from './VineSliderProps';
import { VineCard } from '../VineCard';

import './VineSlider.css';

export function VineSlider(props: VineSliderProps) {
	const { vines } = props;

	const sliderSettings: Settings = {
		dots: true,
		lazyLoad: 'progressive',
		infinite: true,
		speed: 500,
		slidesToShow: vines.length < 4 ? vines.length : 4,
		slidesToScroll: 3
	};

	return (
		<div className="VineSlider">
			<Slider {...sliderSettings}>
				{vines.map((vine) => <VineCard key={vine.id} vine={vine} />)}
			</Slider>
		</div>
	);
}