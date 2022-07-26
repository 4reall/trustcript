import { IArticle } from 'src/common/types/Article';
import DevelopmentIcon from 'public/assets/icons/categories/development.svg';
import SecurityIcon from 'public/assets/icons/categories/security.svg';
import MethodsIcon from 'public/assets/icons/categories/methods.svg';
import GamingIcon from 'public/assets/icons/categories/gaming.svg';
import TipsIcon from 'public/assets/icons/categories/tips.svg';
import FishingIcon from 'public/assets/icons/categories/fishing.svg';
import Development from 'public/assets/images/articles/development.png';
import Security from 'public/assets/images/articles/security.png';
import Methods from 'public/assets/images/articles/methods.png';
import Gaming from 'public/assets/images/articles/gaming.png';
import Tips from 'public/assets/images/articles/tips.png';
import Fishing from 'public/assets/images/articles/fishing.png';
import Code from 'public/assets/images/articles/code.png';

import {
	ArticleFiltersEnum,
	DateFiltersEnum,
} from 'src/common/utils/constants/filters';

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
		categoryIcon: { src: DevelopmentIcon, alt: 'some image' },
		popularity: DateFiltersEnum.DAY,
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
		categoryIcon: { src: FishingIcon, alt: 'some image' },
		popularity: DateFiltersEnum.DAY,
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
		categoryIcon: { src: TipsIcon, alt: 'some image' },
		popularity: DateFiltersEnum.WEEK,
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
		categoryIcon: { src: GamingIcon, alt: 'some image' },
		popularity: DateFiltersEnum.WEEK,
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
		categoryIcon: { src: MethodsIcon, alt: 'some image' },
		popularity: DateFiltersEnum.DAY,
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
		categoryIcon: { src: SecurityIcon, alt: 'some image' },
		popularity: DateFiltersEnum.MONTH,
	},
];

export const article = [
	{
		type: 'text',
		text: 'Нашу жизнь невозможно представить без компьютеров, смартфонов, а значит и нужного для их работы ПО. Всего этого не было бы без кодинга. Хотя это не новый термин, но люди всё еще плохо понимают, что он означает.',
	},
	{
		type: 'text',
		text: 'Издание Business Insider опубликовало краткое руководство по кодингу. Мы подготовили адаптированный перевод материала.',
	},
	{
		type: 'title',
		text: 'Что такое кодинг',
	},
	{
		type: 'text',
		text: 'Кодинг — это процесс написания программного кода или скрипта для выполнения определенного алгоритма. Этим занимаются кодеры. Считается, что для выполнения такой работы нужна хотя бы степень бакалавра. Многие кодеры — самоучки. Некоторые начинают с более скромной двухлетней программы и доучиваются уже на работе.',
	},
	{ type: 'image', image: { src: Code, alt: 'code image' } },
	{
		type: 'title',
		text: 'Как пишут скрипт с компьютерной инструкцией',
	},
	{
		type: 'text',
		text: 'Инструкции обычно пишут на языке программирования высокого уровня. Среди них — C++, Basic, Python, Fortran. Их называют «языки», потому что они включают рудименты английского языка и относительно понятны людям.',
	},
	{
		type: 'text',
		text: 'Код содержит утверждения и команды, которые после некоторой тренировки можно прочитать и понять. Одним из самых ярких примеров простого кода является простая команда «print ‘Hello, world!’».',
	},
	{
		type: 'text',
		text: 'Даже без дополнительного обучения ясно, что кодер хочет напечатать фразу «Hello, world!». Нюанс в том, что нужно дополнительно указать назначение. Например, напечатать на экране или на бумаге принтера. Кодинг позволяет создавать сложные программы с сотнями тысяч строк кода. В процессе нужно следить за синтаксисом, чтобы компьютер понимал код и выполнял его без ошибок.',
	},
];

export const getArticleById = (id: number | string) => {
	const article = articles.find((product) => product.id === +id);
	return article ? article : articles[0];
};
