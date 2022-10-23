import { ProductCategories } from 'src/modules/Products/types/Product';

export enum ProductFilters {
	ALL = 'all',
	FIRST = 'first',
	SECOND = 'second',
	THIRD = 'third',
}

export interface IProductsParams {
	limit?: number;
	page?: number;
	filter?: ProductFilters;
}
