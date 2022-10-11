import {
	ProductFiltersEnum,
	ArticleFiltersEnum,
	DateFiltersEnum,
} from '@/utils/constants/filters';
import { IFilter } from '@/components/Filters/Filters';

export const productFilters: IFilter<ProductFiltersEnum>[] = [
	{
		label: 'Все продукты',
		filter: ProductFiltersEnum.ALL,
	},
	{
		label: '1 категория',
		filter: ProductFiltersEnum.FIRST,
	},

	{
		label: '2 категория',
		filter: ProductFiltersEnum.SECOND,
	},
	{
		label: '3 категория',
		filter: ProductFiltersEnum.THIRD,
	},
];

export const articleFilters: IFilter<ArticleFiltersEnum>[] = [
	{
		label: 'Вcе продукты',
		filter: ArticleFiltersEnum.ALL,
	},
	{
		label: 'Фишинг',
		filter: ArticleFiltersEnum.FISHING,
	},

	{
		label: 'Советы',
		filter: ArticleFiltersEnum.TIPS,
	},
	{
		label: 'Способы',
		filter: ArticleFiltersEnum.METHODS,
	},
	{
		label: 'Разработка',
		filter: ArticleFiltersEnum.DEVELOPMENT,
	},

	{
		label: 'Игры',
		filter: ArticleFiltersEnum.GAMING,
	},
	{
		label: 'Безопасность',
		filter: ArticleFiltersEnum.SECURITY,
	},
];

export const dateFilters: IFilter<DateFiltersEnum>[] = [
	{
		label: 'За день',
		filter: DateFiltersEnum.DAY,
	},
	{
		label: 'За неделю',
		filter: DateFiltersEnum.WEEK,
	},

	{
		label: 'За месяц',
		filter: DateFiltersEnum.MONTH,
	},
];
