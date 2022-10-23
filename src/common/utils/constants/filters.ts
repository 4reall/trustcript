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

export type IFilters = ArticleFiltersEnum | DateFiltersEnum;
