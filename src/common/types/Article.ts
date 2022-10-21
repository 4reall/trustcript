import { ICard } from '@/common/types/Card';
import { IImage } from '@/common/types/Image';
import { ReactNode } from 'react';
import {
	ArticleFiltersEnum,
	DateFiltersEnum,
} from '@/common/utils/constants/filters';

export interface IArticle extends ICard<ArticleFiltersEnum> {
	image: IImage;
	categoryIcon: IImage;
	views: number;
	date: string;
	popularity: DateFiltersEnum;
}
