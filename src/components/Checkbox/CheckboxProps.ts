import { ChangeEventSimple } from '../ChangeEventSimple';

export interface CheckboxProps {
	label: string;
	value?: boolean;
	changes?: (changes: ChangeEventSimple<boolean>) => void;
}