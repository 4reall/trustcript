import { IImage } from '@/common/types/Image';
import { ProductFiltersEnum } from '@/common/utils/constants/filters';

export interface ICard<TCategory> {
	id: number;
	category: TCategory;
	title: string;
	description: string;
}
