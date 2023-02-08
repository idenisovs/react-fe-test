import { useEffect, useState } from 'react';

import { VineProvider } from '../providers';
import { Vine } from '../dtos';

export function useVineList() {
	const [ vineList, setVineList ] = useState<Vine[]>([]);

	useEffect(() => {
		VineProvider.getAll().then((response) => {
			setVineList(response);
		});
	}, []);

	return vineList;
}