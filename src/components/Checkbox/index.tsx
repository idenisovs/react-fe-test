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
			value: e.target.checked
		});
	}

	return (
		<div className="Checkbox">
			<input id={label} type="checkbox" className="css-checkbox" checked={value} onChange={handleChanges} />
			<label htmlFor={label}>
				{label}
			</label>
		</div>
	);
}