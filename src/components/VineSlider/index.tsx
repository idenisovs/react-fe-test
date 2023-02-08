import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import { VineCard } from '../VineCard';
import { VineSliderProps } from './VineSliderProps';
import { VineSliderControls } from './VineSliderControls';

import './VineSlider.css';

const MAX_SLIDES = 4;

export function VineSlider(props: VineSliderProps) {
	const slider = useRef<Slider>(null);
	const [isForwardDisabled, setForwardDisabled] = useState(false);
	const [isBackDisabled, setBackDisabled] = useState(true);

	const { vines } = props;

	const slidesToShow = vines.length <= MAX_SLIDES ? vines.length : MAX_SLIDES;

	const sliderSettings: Settings = {
		dots: false,
		arrows: false,
		centerMode: false,
		infinite: false,
		lazyLoad: 'progressive',
		speed: 500,
		slidesToShow,
		slidesToScroll: 1,
		beforeChange(currentSlide: number, nextSlide: number) {
			setBackDisabled(nextSlide === 0);
			setForwardDisabled(slidesToShow + nextSlide >= vines.length);
		}
	};

	const isSliderControlsVisible = vines.length > MAX_SLIDES;

	return (
		<section className="VineSlider">
			<Slider ref={slider} {...sliderSettings}>
				{vines.map((vine) => <VineCard key={vine.id} vine={vine}/>)}
			</Slider>

			<VineSliderControls slider={slider.current}
								visible={isSliderControlsVisible}
								backDisabled={isBackDisabled}
								forwardDisabled={isForwardDisabled}
			/>
		</section>
	);
}