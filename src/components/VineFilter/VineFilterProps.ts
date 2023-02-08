import { VineFilter } from '../../dtos';

export interface VineFilterProps {
	filter: VineFilter;
	changes?: (filter: VineFilter) => void;
}