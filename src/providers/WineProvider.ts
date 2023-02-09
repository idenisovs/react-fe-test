import { Wine, WineFilter } from '../dtos';

export class WineProvider {
	static async getAll(filter?: WineFilter): Promise<Wine[]> {
		const response = await fetch('/list.json');

		const wines = await response.json() as Wine[];

		const isFilterApplied = filter && Object.values(filter).some((item) => item === true);

		if (isFilterApplied) {
			return wines.filter((wine) => filter[wine.type]);
		}

		return wines;
	}
}