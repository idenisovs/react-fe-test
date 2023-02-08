import React from 'react';

import { Checkbox } from './Checkbox';
import { VineFilterProps } from './VineFilterProps';
import { ChangeEventSimple } from './ChangeEventSimple';
import { VineTypes } from '../dtos';

import './VineFilter.css';

export function VineFilter(props: VineFilterProps) {
	const { filter, changes } = props;

	function handleFilterChanges(e: ChangeEventSimple<boolean>) {
		if (!changes) {
			return;
		}

		const update = {...filter};

		const filterItem = e.name as VineTypes;

		update[filterItem] = e.value;

		changes(update);
	}

	return (
		<nav className="VineFilter">
			{Object.keys(filter).map((filterKey) => {
				return <Checkbox
					key={filterKey}
					label={filterKey}
					value={filter[filterKey as VineTypes]}
					changes={handleFilterChanges}
				/>;
			})}
		</nav>
	);
}
