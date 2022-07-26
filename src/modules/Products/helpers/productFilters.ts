import { IFilter } from 'src/common/components/Filters/Filters';
import { ProductFilters } from 'src/lib/api/products/types/ProductFilters';

export const productFilters: IFilter<ProductFilters>[] = [
	{
		label: 'Все продукты',
		filter: ProductFilters.ALL,
	},
	{
		label: '1 категория',
		filter: ProductFilters.FIRST,
	},

	{
		label: '2 категория',
		filter: ProductFilters.SECOND,
	},
	{
		label: '3 категория',
		filter: ProductFilters.THIRD,
	},
];
