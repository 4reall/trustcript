import { ProductsContainer } from 'pages/Products/component/Products.styles';
import Filters from 'components/_layout/Filters/Filters';
import Cards from 'components/_layout/Cards/Cards';
import Pagination from 'components/_ui/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { ProductFiltersEnum } from 'utils/constants/filters';
import ProductCard from 'components/Card/ProductCard';
import { productFilters } from 'utils/mock/filters';
import { products } from 'utils/mock/products';

const Products = () => {
	const [filteredCard, setFilteredCards] = useState(products);
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState(ProductFiltersEnum.ALL);

	const handleChangeActivePage = (page: number) => {
		setPage(page);
	};

	const handleFilterChange = (filter: ProductFiltersEnum) => {
		setPage(0);
		setFilter(filter);
	};

	useEffect(() => {
		const filtered = products.filter(
			(card) =>
				card.category === filter || filter === ProductFiltersEnum.ALL
		);
		setFilteredCards(filtered);

		// eslint-disable-next-line
	}, [filter, page]);
	return (
		<ProductsContainer>
			<Filters
				activeFilter={filter}
				onClick={handleFilterChange}
				filters={productFilters}
			/>
			<Cards>
				{filteredCard.slice(page * 6, page * 6 + 6).map((card) => (
					<ProductCard {...card} />
				))}
			</Cards>
			<Pagination
				activePage={page}
				setActivePage={handleChangeActivePage}
				shownPageCount={4}
				pageCount={Math.ceil(filteredCard.length / 6)}
			/>
		</ProductsContainer>
	);
};

export default Products;
