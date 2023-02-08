import { Vine, VineFilter } from '../dtos';

export class VineProvider {
	static async getAll(filter?: VineFilter): Promise<Vine[]> {
		const response = await fetch('/list.json');

		const vines = await response.json() as Vine[];

		const isFilterApplied = filter && Object.values(filter).some((item) => item === true);

		if (isFilterApplied) {
			return vines.filter((vine) => filter[vine.type]);
		}

		return vines;
	}
}