import React, { ChangeEvent } from 'react';

import { CheckboxProps } from './CheckboxProps';

import './Checkbox.css';

export function Checkbox(props: CheckboxProps) {
	const { label, value, changes } = props;

	function handleChanges(e: ChangeEvent<HTMLInputElement>) {
		if (!changes) {
			return;
		}

		changes({
			name: label,
			value: Boolean(e.target.value)
		});
	}

	return (
		<>
			<input type="checkbox" checked={value} onChange={handleChanges} /> {label}
		</>
	);
}