import { Vine } from '../dtos';

export class VineProvider {
	static async getAll(): Promise<Vine[]> {
		const response = await fetch('/list.json');

		return response.json();
	}
}