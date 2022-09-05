import { PathsEnum } from 'utils/constants/paths';
import { ProductFiltersEnum } from 'utils/constants/filters';

import Thumbnail from 'assets/images/thumbnails/product_thumbnail.webp';
import Thumbnail1 from 'assets/images/thumbnails/knight.webp';
import Thumbnail2 from 'assets/images/thumbnails/rook.webp';
import { IProduct } from 'types/Product';

export const products: IProduct[] = [
	{
		id: 1,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.FIRST,
		link: { title: 'подробнеe', path: '1' },
		title: 'Название продукта 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 2,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 2',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 3,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 3',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 4,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.FIRST,
		link: { title: 'подробнеe', path: '1' },
		title: 'Название продукта 4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 5,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.THIRD,
		link: { title: 'подробнеe', path: '3' },
		title: 'Название продукта 5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 6,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.THIRD,
		link: { title: 'подробнеe', path: '3' },
		title: 'Название продукта 6',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 7,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.FIRST,
		link: { title: 'подробнеe', path: '1' },
		title: 'Название продукта 7',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 8,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.THIRD,
		link: { title: 'подробнеe', path: '3' },
		title: 'Название продукта 8',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 9,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 9',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 10,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 10',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 11,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.FIRST,
		link: { title: 'подробнеe', path: '1' },
		title: 'Название продукта 11',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 12,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.FIRST,
		link: { title: 'подробнеe', path: '1' },
		title: 'Название продукта 12',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 13,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 13',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 14,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 14',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 15,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.THIRD,
		link: { title: 'подробнеe', path: '3' },
		title: 'Название продукта 15',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 16,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.THIRD,
		link: { title: 'подробнеe', path: '3' },
		title: 'Название продукта 16',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 17,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.THIRD,
		link: { title: 'подробнеe', path: '3' },
		title: 'Название продукта 17',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 18,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.FIRST,
		link: { title: 'подробнеe', path: '1' },
		title: 'Название продукта 18',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 19,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.FIRST,
		link: { title: 'подробнеe', path: '1' },
		title: 'Название продукта 19',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 20,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 21,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.THIRD,
		link: { title: 'подробнеe', path: '3' },
		title: 'Название продукта 21',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 22,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 22',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 23,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.FIRST,
		link: { title: 'подробнеe 23', path: '1' },
		title: 'Название продукта',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 24,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 24',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},

	{
		id: 25,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.THIRD,
		link: { title: 'подробнеe', path: '3' },
		title: 'Название продукта 25',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 26,
		images: [
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.THIRD,
		link: { title: 'подробнеe', path: '3' },
		title: 'Название продукта 26',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 27,
		images: [
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
			{ src: Thumbnail1, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.SECOND,
		link: { title: 'подробнеe', path: '2' },
		title: 'Название продукта 27',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
	{
		id: 28,
		images: [
			{ src: Thumbnail1, alt: 'thumbnail' },
			{ src: Thumbnail2, alt: 'thumbnail' },
			{ src: Thumbnail, alt: 'thumbnail' },
		],
		category: ProductFiltersEnum.FIRST,
		link: { title: 'подробнеe', path: '1' },
		title: 'Название продукта 28',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi delectus et excepturi fugiat ipsum iste itaque iusto nam necessitatibus nesciunt pariatur perferendis, porro possimus provident recusandae sunt temporibus voluptas voluptatem? Cupiditate eius facere ipsum, libero magni maxime molestiae nam necessitatibus officiis temporibus. Architecto aut cum earum fuga in!',
	},
];

export const getProductById = (id: number | string) => {
	const product = products.find((product) => product.id === +id);
	return product ? product : products[0];
};

export const getRandomProducts = (count: number) => {
	const map = new Map();
	for (let i = 0; i < count; i++) {
		const randomProduct =
			products[Math.floor(Math.random() * products.length)];
		if (map.get(randomProduct.id)) {
			i--;
		} else {
			map.set(randomProduct.id, randomProduct);
		}
	}
	return Array.from(map.values());
};
