import { VineTypes } from './VineTypes';

export type VineFilter = {
	[type in VineTypes]: boolean;
};