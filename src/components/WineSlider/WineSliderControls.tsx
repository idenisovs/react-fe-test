import React from 'react';

import { WineSliderControlsProps } from './WineSliderControlsProps';

export function WineSliderControls(props: WineSliderControlsProps) {
	const { slider, visible, forwardDisabled, backDisabled } = props;

	if (!props.slider) {
		return null;
	}

	const isVisible = typeof props.visible === 'undefined' ? true : visible;

	if (!isVisible) {
		return null;
	}

	return (
		<div className="WineSlider--Controls">
			<button type="button"
					className="WineSlider--Controls__button"
					onClick={slider?.slickPrev}
					disabled={backDisabled}
			>
				<i className="material-symbols-outlined">arrow_back_ios_new</i>
			</button>

			<button type="button"
					className="WineSlider--Controls__button"
					onClick={slider?.slickNext}
					disabled={forwardDisabled}
			>
				<i className="material-symbols-outlined">arrow_forward_ios</i>
			</button>
		</div>
	);
}