export enum ProductFiltersEnum {
	ALL = 'all',
	FIRST = '1',
	SECOND = '2',
	THIRD = '3',
}

export enum ArticleFiltersEnum {
	ALL = 'all',
	FISHING = 'fishing',
	TIPS = 'tips',
	METHODS = 'methods',
	GAMING = 'gaming',
	SECURITY = 'security',
	DEVELOPMENT = 'development',
}
export enum DateFiltersEnum {
	DAY = 'day',
	WEEK = 'week',
	MONTH = 'month',
}

export type IFilters =
	| ArticleFiltersEnum
	| ProductFiltersEnum
	| DateFiltersEnum;
