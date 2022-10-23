import { IImage } from 'src/common/types/Image';
import { CategoryFilters } from 'src/common/utils/constants/filters';

export interface ICard<TCategory> {
	id: number;
	category: TCategory;
	title: string;
	description: string;
}
