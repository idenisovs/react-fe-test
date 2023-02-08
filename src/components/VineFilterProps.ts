import { VineTypes } from '../dtos';

export interface VineFilterProps {
	filter: VineTypes[];
	changes?: (filter: VineTypes[]) => void;
}