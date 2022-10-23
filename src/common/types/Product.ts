import { IImage } from 'src/common/types/Image';
import { ProductBase } from 'src/lib/prisma';

export type ProductCategories = 'first' | 'second' | 'third';

export interface IBaseProduct {
	id: number;
	category: ProductCategories;
	title: string;
	description: string;
}

export interface IProduct extends ProductBase {
	images: IImage[];
	thumbnails: IImage[];
}
