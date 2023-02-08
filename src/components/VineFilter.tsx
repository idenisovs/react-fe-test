import React from 'react';

import { Checkbox } from './Checkbox';
import { VineFilterProps } from './VineFilterProps';
import { ChangeEventSimple } from './ChangeEventSimple';
import { VineTypes } from '../dtos';

import './VineFilter.css';

export function VineFilter(props: VineFilterProps) {
	const { filter, changes } = props;

	function handleFilterChanges(changesEvent: ChangeEventSimple<Boolean>) {
		if (!changes) {
			return;
		}

		const filterUpdate = [...filter];
		const idx = filter.indexOf(changesEvent.name as VineTypes);

		if (idx === -1) {
			filterUpdate.push(changesEvent.name as VineTypes);
		} else {
			filterUpdate.splice(idx, 1);
		}

		changes(filterUpdate);
	}

	return (
		<nav className="VineFilter">
			<Checkbox label="dry" value={isSelected('dry', filter)} changes={handleFilterChanges} />
			<Checkbox label="semi-dry" value={isSelected('semi-dry', filter)} changes={handleFilterChanges} />
			<Checkbox label="sweet" value={isSelected('sweet', filter)} changes={handleFilterChanges} />
		</nav>
	);
}

function isSelected(type: VineTypes, filter: VineTypes[]) {
	return filter.indexOf(type) > -1;
}
