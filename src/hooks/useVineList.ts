import { useEffect, useState } from 'react';

import { VineProvider } from '../providers';
import { Vine, VineTypes } from '../dtos';

export function useVineList(filter: VineTypes[]) {
	const [ vineList, setVineList ] = useState<Vine[]>([]);

	useEffect(() => {
		VineProvider.getAll().then((response) => {
			setVineList(response);
		});
	}, []);

	return vineList;
}