import {
	CategoryFilters,
	ArticleFiltersEnum,
	DateFiltersEnum,
} from 'src/common/utils/constants/filters';
import { IFilter } from 'src/common/components/Filters/Filters';

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
