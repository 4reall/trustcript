import { useCallback, useEffect, useState } from 'react';

import { ContentContainer } from 'pages/share/Content/Content.styles';
import Filters from 'components/Filters/Filters';
import Tabs from 'components/Tabs/Tabs';
import Pagination from 'components/ui/Pagination/Pagination';
import Spinner from 'components/Spinner/Spinner';

import {
	ProductFiltersEnum,
	IFilters,
	ArticleFiltersEnum,
} from 'utils/constants/filters';
import { IFilter } from 'types/Filter';
import { ICard } from 'types/Card';

interface ContentProps<TCard> {
	cards: TCard[];
	filters: IFilter<IFilters>[];
	render: (card: TCard) => JSX.Element;
	filterType: 'theme' | 'category';
}

const filtersMap = {
	category: ProductFiltersEnum,
	theme: ArticleFiltersEnum,
};

const Content = <TCard extends ICard<IFilters>>({
	cards,
	filters,
	render,
	filterType,
}: ContentProps<TCard>) => {
	const [filteredCard, setFilteredCards] = useState(cards);
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState(filtersMap[filterType].ALL);
	const [loading, setLoading] = useState(false);

	const handleChangeActivePage = useCallback(
		(page: number) => {
			setPage(page);
		},
		// eslint-disable-next-line
		[filter]
	);

	const handleFilterChange = (filter: IFilters) => {
		setPage(0);
		setFilter(filter);
	};

	useEffect(() => {
		if (!loading) {
			setLoading(true);
			setTimeout(() => setLoading(false), 500);
		}
		setFilteredCards(
			cards.filter(
				(card) =>
					card.category === filter ||
					filter === ProductFiltersEnum.ALL
			)
		);
		// eslint-disable-next-line
	}, [filter, page]);

	const spinner = loading ? <Spinner /> : null;
	const tabs = !loading ? (
		<Tabs<TCard>
			cards={filteredCard.slice(page * 6, page * 6 + 6)}
			render={render}
		/>
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

export default Content;
