import { PathsEnum } from 'utils/constants/paths';
import { IFilter } from 'components/Filters/Filters';
import { FiltersEnum } from 'utils/constants/filters';

import Thumbnail from 'assets/images/product_thumbnail.png';
import Thumbnail1 from 'assets/images/knight.png';
import Thumbnail2 from 'assets/images/rook.png';
import { ICard } from 'types/Card';

export const cards: ICard[] = [
	{
		id: 1,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '1',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 2,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 3,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: '3',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 4,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 5,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 6,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '3',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 7,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '3',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 8,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '3',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 9,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: '3',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 10,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 11,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '1',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 12,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '1',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 13,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 14,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '3',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 15,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '1',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 16,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '3',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 17,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 18,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 19,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 20,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 21,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 22,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '1',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 23,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '1',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 24,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},

	{
		id: 25,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '1',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 26,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 27,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
	{
		id: 28,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: '2',
		link: { title: 'подробнеe', path: PathsEnum.Main },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
	},
];

export const filters: IFilter[] = [
	{
		title: 'Все продукты',
		filter: FiltersEnum.ALL,
	},
	{
		title: '1 категория',
		filter: FiltersEnum.FIRST,
	},

	{
		title: '2 категория',
		filter: FiltersEnum.SECOND,
	},
	{
		title: '3 категория',
		filter: FiltersEnum.THIRD,
	},
];
