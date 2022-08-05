import {
	ProductFiltersEnum,
	ArticleFiltersEnum,
	DateFiltersEnum,
} from 'utils/constants/filters';
import { IFilter } from 'types/Filter';

export const productFilters: IFilter<ProductFiltersEnum>[] = [
	{
		title: 'Все продукты',
		filter: ProductFiltersEnum.ALL,
	},
	{
		title: '1 категория',
		filter: ProductFiltersEnum.FIRST,
	},

	{
		title: '2 категория',
		filter: ProductFiltersEnum.SECOND,
	},
	{
		title: '3 категория',
		filter: ProductFiltersEnum.THIRD,
	},
];

export const articleFilters: IFilter<ArticleFiltersEnum>[] = [
	{
		title: 'Вcе продукты',
		filter: ArticleFiltersEnum.ALL,
	},
	{
		title: 'Фишинг',
		filter: ArticleFiltersEnum.FISHING,
	},

	{
		title: 'Советы',
		filter: ArticleFiltersEnum.TIPS,
	},
	{
		title: 'Способы',
		filter: ArticleFiltersEnum.METHODS,
	},
	{
		title: 'Разработка',
		filter: ArticleFiltersEnum.DEVELOPMENT,
	},

	{
		title: 'Игры',
		filter: ArticleFiltersEnum.GAMING,
	},
	{
		title: 'Безопасность',
		filter: ArticleFiltersEnum.SECURITY,
	},
];

export const dateFilters: IFilter<DateFiltersEnum>[] = [
	{
		title: 'За день',
		filter: DateFiltersEnum.DAY,
	},
	{
		title: 'За неделю',
		filter: DateFiltersEnum.WEEK,
	},

	{
		title: 'За месяц',
		filter: DateFiltersEnum.MONTH,
	},
];
