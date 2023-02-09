import Slider from 'react-slick';

export interface WineSliderControlsProps {
	slider: Slider|null;
	visible?: boolean;
	back?: () => void;
	backDisabled: boolean;
	forward?: () => void;
	forwardDisabled: boolean;
}