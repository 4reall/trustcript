import Filters from 'components/Filters/Filters';
import { cards, filters } from 'utils/mock/products';
import Tabs from 'components/Tabs/Tabs';
import Pagination from 'components/ui/Pagination/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { FiltersEnum } from 'utils/constants/filters';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import { ContentContainer } from 'pages/Products/screens/Content/Content.styles';

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
		<ContentContainer>
			<Filters
				activeFilter={filter}
				onClick={handleFilterChange}
				filters={filters}
			/>
			<Tabs cards={filteredCard.slice(page * 6, page * 6 + 6)} />
			<Pagination
				setActivePage={handleChangeActivePage}
				// vertical={isXl}
				shownPageCount={4}
				pageCount={Math.ceil(filteredCard.length / 6)}
			/>
		</ContentContainer>
	);
};

export default Content;
