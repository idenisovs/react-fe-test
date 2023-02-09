import React from 'react';

import { Checkbox } from '../Checkbox';
import { WineFilterProps } from './WineFilterProps';
import { ChangeEventSimple } from '../ChangeEventSimple';
import { WineTypes } from '../../dtos';

import './WineFilter.css';

export function WineFilter(props: WineFilterProps) {
	const { filter, changes } = props;

	function handleFilterChanges(e: ChangeEventSimple<boolean>) {
		if (!changes) {
			return;
		}

		const update = {...filter};

		const filterItem = e.name as WineTypes;

		update[filterItem] = e.value;

		changes(update);
	}

	return (
		<nav className="WineFilter">
			{Object.keys(filter).map((filterKey) => {
				return <Checkbox
					key={filterKey}
					label={filterKey}
					value={filter[filterKey as WineTypes]}
					changes={handleFilterChanges}
				/>;
			})}
		</nav>
	);
}
