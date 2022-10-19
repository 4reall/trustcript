import { Container } from '@/modules/Products/Products.styles';
import Cards from '@/components/Cards/Cards';
import { useState } from 'react';
import { ProductFiltersEnum } from '@/utils/constants/filters';
import ProductCard from '@/components/Card/ProductCard';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';
import { IProduct } from '@/types/Product';

interface ProductsProps {
	products: IProduct[];
}

const Products = ({ products }: ProductsProps) => {
	const isLg = useMediaQuery(queries.up.lg);
	const isMd = useMediaQuery(queries.up.md);
	const isSm = useMediaQuery(queries.up.sm);

	const [filteredCard, setFilteredCards] = useState(products);
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState(ProductFiltersEnum.ALL);

	// const handleChangeActivePage = (page: number) => {
	// 	setPage(page);
	// };
	//
	// const handleFilterChange = (filter: ProductFiltersEnum) => {
	// 	setPage(0);
	// 	setFilter(filter);
	// };
	//
	// useEffect(() => {
	// 	const filtered = products.filter(
	// 		(card) =>
	// 			card.category === filter || filter === ProductFiltersEnum.ALL
	// 	);
	// 	setFilteredCards(filtered);
	//
	// 	// eslint-disable-next-line
	// }, [filter, page]);
	return (
		<Container>
			{/*<Filters*/}
			{/*	activeFilter={filter}*/}
			{/*	// onClick={handleFilterChange}*/}
			{/*	filters={productFilters}*/}
			{/*	columns={isMd ? 4 : isSm ? 2 : 1}*/}
			{/*	small={!isLg}*/}
			{/*	margin={[0, 0, '2rem', 0]}*/}
			{/*/>*/}
			<Cards>
				{products.slice(page * 6, page * 6 + 6).map((card) => (
					<ProductCard key={card.id} {...card} />
				))}
			</Cards>
			{/*<Pagination*/}
			{/*	activePage={page}*/}
			{/*	setActivePage={handleChangeActivePage}*/}
			{/*	pageDisplayed={4}*/}
			{/*	pageCount={Math.ceil(filteredCard.length / 6)}*/}
			{/*/>*/}
		</Container>
	);
};

export default Products;
