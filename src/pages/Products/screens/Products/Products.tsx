import { useCallback, useEffect, useState } from 'react';

import { ContentContainer } from 'pages/Products/screens/Products/Products.styles';
import Filters from 'components/Filters/Filters';
import Tabs from 'components/Tabs/Tabs';
import Pagination from 'components/ui/Pagination/Pagination';
import Spinner from 'components/Spinner/Spinner';

import { FiltersEnum } from 'utils/constants/filters';

import { products, filters } from 'utils/mock/products';

const Products = () => {
	const [filteredCard, setFilteredCards] = useState(products);
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState(FiltersEnum.ALL);
	const [loading, setLoading] = useState(false);

	const handleChangeActivePage = useCallback(
		(page: number) => {
			setPage(page);
		},
		// eslint-disable-next-line
		[filter]
	);

	const handleFilterChange = (filter: FiltersEnum) => {
		setPage(0);
		setFilter(filter);
	};

	useEffect(() => {
		if (!loading) {
			setLoading(true);
			setTimeout(() => setLoading(false), 500);
		}
		setFilteredCards(
			products.filter(
				(card) => card.category === filter || filter === FiltersEnum.ALL
			)
		);
		// eslint-disable-next-line
	}, [filter, page]);

	const spinner = loading ? <Spinner /> : null;
	const tabs = !loading ? (
		<Tabs cards={filteredCard.slice(page * 6, page * 6 + 6)} />
	) : null;

	return (
		<ContentContainer>
			<Filters
				activeFilter={filter}
				onClick={handleFilterChange}
				filters={filters}
			/>
			{spinner}
			{tabs}
			<Pagination
				setActivePage={handleChangeActivePage}
				shownPageCount={4}
				pageCount={Math.ceil(filteredCard.length / 6)}
			/>
		</ContentContainer>
	);
};

export default Products;
