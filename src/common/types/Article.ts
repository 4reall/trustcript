import { ICard } from '@/types/Card';
import { IImage } from '@/types/Image';
import { ReactNode } from 'react';
import {
	ArticleFiltersEnum,
	DateFiltersEnum,
} from 'src/common/utils/constants/filters';

export interface IArticle extends ICard<ArticleFiltersEnum> {
	image: IImage;
	categoryIcon: IImage;
	views: number;
	date: string;
	popularity: DateFiltersEnum;
}
