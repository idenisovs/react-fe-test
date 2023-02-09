import { useEffect, useState } from 'react';

import { WineProvider } from '../providers';
import { Wine, WineFilter } from '../dtos';

export function useWineList(filter: WineFilter) {
	const [ wineList, setWineList ] = useState<Wine[]>([]);

	useEffect(() => {
		WineProvider.getAll(filter).then((response) => {
			setWineList(response);
		});
	}, [filter]);

	return wineList;
}