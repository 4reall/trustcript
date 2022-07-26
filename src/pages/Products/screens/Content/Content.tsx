import Filters from 'components/Filters/Filters';
import { cards, filters } from 'pages/Products/screens/Content/mock';
import Tabs from 'components/Tabs/Tabs';
import Pagination from 'components/ui/Pagination/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { FiltersEnum } from 'utils/constants/filters';

const Content = () => {
	const [filteredCard, setFilteredCards] = useState(cards);
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState(FiltersEnum.ALL);

	const handleChangeActivePage = useCallback(
		(page: number) => {
			setPage(page);
		},
		[filter]
	);

	const handleFilterChange = (filter: FiltersEnum) => {
		setPage(0);
		setFilter(filter);
	};

	useEffect(() => {
		setFilteredCards(
			cards.filter(
				(card) => card.category === filter || filter === FiltersEnum.ALL
			)
		);
	}, [filter, page]);

	return (
		<>
			<Filters
				activeFilter={filter}
				onClick={handleFilterChange}
				filters={filters}
			/>
			<Tabs
				filters={filters}
				cards={filteredCard.slice(page * 6, page * 6 + 6)}
			/>
			<Pagination
				setActivePage={handleChangeActivePage}
				vertical
				shownPageCount={4}
				pageCount={Math.ceil(filteredCard.length / 6)}
			/>
		</>
	);
};

export default Content;
