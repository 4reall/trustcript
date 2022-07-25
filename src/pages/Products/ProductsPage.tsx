import { Container } from 'components/layout/Container.styles';
import Tabs from 'components/Tabs/Tabs';
import { ICard } from 'components/Card/Card';
import Thumbnail from 'assets/images/product_thumbnail.png';
import { PathsEnum } from 'utils/constants/paths';
import Filters, { IFilter } from 'components/Filters/Filters';
import { ProductsContainer } from 'pages/Products/ProductsPage.styles';
import { Typography } from 'components/layout/Typography.styles';
import Pagination from 'components/ui/Pagination/Pagination';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
	const cards: ICard[] = [
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
		{
			images: [
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
				{ src: Thumbnail, alt: 'thumbnail' },
			],
			link: { title: 'подробнеe', path: PathsEnum.Main },
			title: 'Название продукта',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, exercitationem.',
		},
	];
	const filters: IFilter[] = [
		{
			title: 'Все продукты',
			onClick: () => {},
		},
		{
			title: '1 категория',
			onClick: () => {},
		},
		{
			title: '2 категория',
			onClick: () => {},
		},
		{
			title: '3 категория',
			onClick: () => {},
		},
	];

	const [page, setPage] = useState(cards.splice(0, 6));

	const handleChangeActivePage = (page: number) => {
		if (page === 0) setPage(cards.splice(0, 6));
		else setPage(cards.splice(page * 6, page * 6));
	};

	return (
		<ProductsContainer>
			<Container maxWidth="xl">
				<Typography as="h2" variant="h2" bold>
					Наши продукты
				</Typography>
				<Typography mt="2rem" mb="2rem" as="p" variant="h4">
					Мы придерживаемся в своей работе простого принципа:
					детектировать и блокировать любую вредоносную атаку.
				</Typography>
				<Filters filters={filters} />
				<Tabs filters={filters} cards={page} />
				<Pagination
					setActivePage={handleChangeActivePage}
					vertical
					shownPageCount={4}
					pageCount={12}
				/>
			</Container>
		</ProductsContainer>
	);
};

export default ProductsPage;
