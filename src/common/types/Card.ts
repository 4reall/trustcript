import { IImage } from '@/types/Image';
import { ProductFiltersEnum } from '@/utils/constants/filters';

export interface ICard<TCategory> {
	id: number;
	category: TCategory;
	title: string;
	description: string;
}
