import { useEffect, useState } from 'react';

import { VineProvider } from '../providers';
import { Vine, VineFilter} from '../dtos';

export function useVineList(filter: VineFilter) {
	const [ vineList, setVineList ] = useState<Vine[]>([]);

	useEffect(() => {
		VineProvider.getAll(filter).then((response) => {
			setVineList(response);
		});
	}, [filter]);

	return vineList;
}