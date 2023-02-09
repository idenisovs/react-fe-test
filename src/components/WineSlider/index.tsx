import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import { WineCard } from '../WineCard';
import { WineSliderProps } from './WineSliderProps';
import { WineSliderControls } from './WineSliderControls';

import './WineSlider.css';

const MAX_SLIDES = 4;

export function WineSlider(props: WineSliderProps) {
	const slider = useRef<Slider>(null);
	const [isForwardDisabled, setForwardDisabled] = useState(false);
	const [isBackDisabled, setBackDisabled] = useState(true);

	const { wines } = props;

	const slidesToShow = wines.length <= MAX_SLIDES ? wines.length : MAX_SLIDES;

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
			setForwardDisabled(slidesToShow + nextSlide >= wines.length);
		}
	};

	const isSliderControlsVisible = wines.length > MAX_SLIDES;

	return (
		<section className="WineSlider">
			<Slider ref={slider} {...sliderSettings}>
				{wines.map((wine) => <WineCard key={wine.id} wine={wine}/>)}
			</Slider>

			<WineSliderControls slider={slider.current}
								visible={isSliderControlsVisible}
								backDisabled={isBackDisabled}
								forwardDisabled={isForwardDisabled}
			/>
		</section>
	);
}