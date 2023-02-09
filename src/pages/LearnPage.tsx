import React from 'react';

import './LearnPage.css';
import { useParams } from 'react-router-dom';

type RouteParams = {
	wineId: number;
}

export function LearnPage() {
	const { wineId } = useParams<keyof RouteParams>();

	return (
		<section>
			<h1>
				Learn Page
			</h1>
			<p>
				Displaying data of wine {wineId}.
			</p>
		</section>
	);
}
