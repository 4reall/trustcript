import { IArticle } from 'types/Article';
import { ReactComponent as DevelopmentIcon } from 'assets/icons/categories/development.svg';
import { ReactComponent as SecurityIcon } from 'assets/icons/categories/security.svg';
import { ReactComponent as MethodsIcon } from 'assets/icons/categories/methods.svg';
import { ReactComponent as GamingIcon } from 'assets/icons/categories/gaming.svg';
import { ReactComponent as TipsIcon } from 'assets/icons/categories/tips.svg';
import { ReactComponent as FishingIcon } from 'assets/icons/categories/fishing.svg';
import Development from 'assets/images/articles/development.png';
import Security from 'assets/images/articles/security.png';
import Methods from 'assets/images/articles/methods.png';
import Gaming from 'assets/images/articles/gaming.png';
import Tips from 'assets/images/articles/tips.png';
import Fishing from 'assets/images/articles/fishing.png';
import { ArticleFiltersEnum } from 'utils/constants/filters';

export const articles: IArticle[] = [
	{
		id: 0,
		description:
			'Нашу жизнь невозможно представить без компьютеров, смартфонов, а значит и нужного для их работы ПО. Всего этого не было бы без кодинга. Хотя это не новый термин, но люди всё еще плохо понимают, что он означает.',
		title: 'Что такое кодинг и зачем нужны тестировщики?',
		image: { src: Development, alt: 'article image' },
		category: ArticleFiltersEnum.DEVELOPMENT,
		views: 24000,
		date: '24.01.22',
		categoryIcon: <DevelopmentIcon />,
	},
	{
		id: 1,
		description:
			'Нашу жизнь невозможно представить без компьютеров, смартфонов, а значит и нужного для их работы ПО. Всего этого не было бы без кодинга. Хотя это не новый термин, но люди всё еще плохо понимают, что он означает.',
		title: 'Что такое кодинг и зачем нужны тестировщики?',
		image: { src: Fishing, alt: 'article image' },
		category: ArticleFiltersEnum.FISHING,
		views: 24000,
		date: '24.01.22',
		categoryIcon: <FishingIcon />,
	},
	{
		id: 2,
		description:
			'Нашу жизнь невозможно представить без компьютеров, смартфонов, а значит и нужного для их работы ПО. Всего этого не было бы без кодинга. Хотя это не новый термин, но люди всё еще плохо понимают, что он означает.',
		title: 'Что такое кодинг и зачем нужны тестировщики?',
		image: { src: Tips, alt: 'article image' },
		category: ArticleFiltersEnum.TIPS,
		views: 24000,
		date: '24.01.22',
		categoryIcon: <TipsIcon />,
	},
	{
		id: 3,
		description:
			'Нашу жизнь невозможно представить без компьютеров, смартфонов, а значит и нужного для их работы ПО. Всего этого не было бы без кодинга. Хотя это не новый термин, но люди всё еще плохо понимают, что он означает.',
		title: 'Что такое кодинг и зачем нужны тестировщики?',
		image: { src: Gaming, alt: 'article image' },
		category: ArticleFiltersEnum.GAMING,
		views: 24000,
		date: '24.01.22',
		categoryIcon: <GamingIcon />,
	},
	{
		id: 4,
		description:
			'Нашу жизнь невозможно представить без компьютеров, смартфонов, а значит и нужного для их работы ПО. Всего этого не было бы без кодинга. Хотя это не новый термин, но люди всё еще плохо понимают, что он означает.',
		title: 'Что такое кодинг и зачем нужны тестировщики?',
		image: { src: Methods, alt: 'article image' },
		category: ArticleFiltersEnum.METHODS,
		views: 24000,
		date: '24.01.22',
		categoryIcon: <MethodsIcon />,
	},
	{
		id: 5,
		description:
			'Нашу жизнь невозможно представить без компьютеров, смартфонов, а значит и нужного для их работы ПО. Всего этого не было бы без кодинга. Хотя это не новый термин, но люди всё еще плохо понимают, что он означает.',
		title: 'Что такое кодинг и зачем нужны тестировщики?',
		image: { src: Security, alt: 'article image' },
		category: ArticleFiltersEnum.SECURITY,
		views: 24000,
		date: '24.01.22',
		categoryIcon: <SecurityIcon />,
	},
];
