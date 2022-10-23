import { ParsedUrlQuery } from 'querystring';

export interface IProductsParams extends ParsedUrlQuery {
	limit?: string;
	page?: string;
	filter?: string;
}
