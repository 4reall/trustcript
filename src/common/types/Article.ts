import { ICard } from 'src/common/types/Card';
import { IImage } from 'src/common/types/Image';
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
