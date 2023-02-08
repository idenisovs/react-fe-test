import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';

import { VineSliderProps } from './VineSliderProps';
import { VineCard } from '../VineCard';

import './VineSlider.css';

const MAX_SLIDES = 4;

export function VineSlider(props: VineSliderProps) {
	const slider = useRef<Slider>(null);

	const { vines } = props;

	const sliderSettings: Settings = {
		dots: false,
		arrows: false,
		centerMode: false,
		lazyLoad: 'progressive',
		speed: 500,
		slidesToShow: vines.length <= MAX_SLIDES ? vines.length - 1 : MAX_SLIDES,
		slidesToScroll: 1
	};

	return (
		<div className="VineSlider">
			<Slider ref={slider} {...sliderSettings}>
				{vines.map((vine) => <VineCard key={vine.id} vine={vine} />)}
			</Slider>
			{/*<button type="button" onClick={slider.current?.slickNext}>*/}
			{/*	Next*/}
			{/*</button>*/}
		</div>
	);
}