import React, { useState } from 'react';

import { WineFilter, WineSlider } from '../components';
import { WineFilter as Filter } from '../dtos';
import { useWineList } from '../hooks';

import './MainPage.css';

export function MainPage() {
	const [wineFilter, setWineFilter] = useState<Filter>({
		dry: false,
		'semi-dry': false,
		sweet: false,
	});

	const wines = useWineList(wineFilter);

	return (
		<div>
			<WineFilter filter={wineFilter} changes={setWineFilter} />

			<WineSlider wines={wines} />
		</div>
	);
}
