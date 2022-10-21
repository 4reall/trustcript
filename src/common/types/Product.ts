import { IImage } from '@/common/types/Image';
import { ICard } from '@/common/types/Card';
import { ProductFiltersEnum } from '@/common/utils/constants/filters';

export type Categories = 'first' | 'second' | 'third';

export interface IBaseProduct {
	id: number;
	category: Categories;
	title: string;
	description: string;
}

export interface IProduct extends IBaseProduct {
	images: IImage[];
	thumbnails: IImage[];
}
