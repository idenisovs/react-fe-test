import React, { useState } from 'react';

import { VineFilter } from '../components';
import { useVineList } from '../hooks';
import { VineTypes } from '../dtos';

import './MainPage.css';

export function MainPage() {
	const [vineFilter, setVineFilter] = useState<VineTypes[]>([]);
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
