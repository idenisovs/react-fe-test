import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { VineFilter } from './components';
import router from './router';

import './App.css';

function App() {
	return (
		<div>
			<VineFilter/>

			<RouterProvider router={router}/>
		</div>
	);
}

export default App;
