import { IProduct } from 'src/common/types/Product';

export interface IProductsResponse {
	totalCount: number;
	products: IProduct[];
}
