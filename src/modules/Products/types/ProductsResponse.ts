import { IProduct } from 'src/modules/Products/types/Product';

export interface IProductsResponse {
	totalCount: number;
	products: IProduct[];
}
