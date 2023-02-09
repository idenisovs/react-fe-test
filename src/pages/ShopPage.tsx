import React from 'react';
import { useParams } from 'react-router-dom';

import './ShopPage.css';

type RouteParams = {
	wineId: number;
}

export function ShopPage() {
	const { wineId } = useParams<keyof RouteParams>();

	return (
		<section>
			<h1>
				Shop Page
			</h1>
			<p>
				Displaying data of wine {wineId}.
			</p>
		</section>
	);
}
