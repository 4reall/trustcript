import { ICard } from 'types/Card';
import { IImage } from 'types/Image';
import { ReactNode } from 'react';
import { ArticleFiltersEnum, DateFiltersEnum } from 'utils/constants/filters';

export interface IArticle extends ICard<ArticleFiltersEnum> {
	image: IImage;
	categoryIcon: ReactNode;
	views: number;
	date: string;
	popularity: DateFiltersEnum;
}
