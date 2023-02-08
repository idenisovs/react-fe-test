import React, { useState } from 'react';

import { VineFilter } from '../components';
import { VineFilter as Filter } from '../dtos';
import { useVineList } from '../hooks';

import './MainPage.css';

export function MainPage() {
	const [vineFilter, setVineFilter] = useState<Filter>({
		dry: false,
		'semi-dry': false,
		sweet: false,
	});

	const vines = useVineList(vineFilter);

	return (
		<div>
			<VineFilter filter={vineFilter} changes={setVineFilter} />

			<pre>
				{JSON.stringify(vines, null, 4)}
			</pre>
		</div>
	);
}
