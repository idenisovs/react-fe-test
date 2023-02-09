import { WineTypes } from './WineTypes';

export type WineFilter = {
	[type in WineTypes]: boolean;
};