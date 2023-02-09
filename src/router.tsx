import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { LearnPage, MainPage, ShopPage } from './pages';

export default createBrowserRouter([
	{
		path: '/',
		element: <MainPage />
	},
	{
		path: '/learn/:wineId',
		element: <LearnPage />
	},
	{
		path: '/shop/:wineId',
		element: <ShopPage />
	}
]);