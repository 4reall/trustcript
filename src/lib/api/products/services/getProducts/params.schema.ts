import { number, object, string } from 'yup';
import { ProductFilters } from 'src/lib/api/products/types/ProductFilters';

export const paramsSchema = object().shape({
	limit: number().optional(),
	page: number().default(1),
	filter: string()
		.optional()
		.oneOf([
			ProductFilters.ALL,
			ProductFilters.FIRST,
			ProductFilters.SECOND,
			ProductFilters.THIRD,
		]),
});
