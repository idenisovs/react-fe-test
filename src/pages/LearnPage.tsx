import React from 'react';

import { Link, useParams } from 'react-router-dom';
import { useWine } from '../hooks';

import './LearnPage.css';

type RouteParams = {
	wineId: string;
}

export function LearnPage() {
	const { wineId } = useParams<keyof RouteParams>();
	const wine = useWine(wineId);

	return (
		<section className="WinePage">
			<header>
				<h1>
					Learn Page
				</h1>
				<small>
					Displaying data of wine {wineId}.
				</small>
			</header>

			<pre>
				{JSON.stringify(wine, null, 4)}
			</pre>

			<div className="WinePage__Actions">
				<Link to="/" className="WinePage__Link">
					<i className="material-symbols-outlined">arrow_back_ios_new</i> Back
				</Link>
			</div>
		</section>
	);
}
