import { useEffect, useState } from 'react';

import { WineProvider } from '../providers';
import { Wine } from '../dtos';

export function useWine(wineId: string) {
	const [ wine, setWine ] = useState<Wine|null>(null);

	useEffect(() => {
		WineProvider.getById(wineId).then((response) => {
			setWine(response ? response : null);
		})
	}, [wineId]);

	return wine;
}