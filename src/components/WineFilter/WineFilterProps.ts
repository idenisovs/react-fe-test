import { WineFilter } from '../../dtos';

export interface WineFilterProps {
	filter: WineFilter;
	changes?: (filter: WineFilter) => void;
}