import { IImage } from '@/types/Image';
import { ICard } from '@/types/Card';
import { ProductFiltersEnum } from '@/utils/constants/filters';

export interface IProduct extends ICard<ProductFiltersEnum> {
	images: IImage[];
	link: {
		title: string;
		path: string;
	};
}
