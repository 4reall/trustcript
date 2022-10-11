import { Container } from '@/modules/Products/Products.styles';
import Filters from '@/components/Filters/Filters';
import Cards from '@/components/Cards/Cards';
import Pagination from '@/components/_ui/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { ArticleFiltersEnum } from '@/utils/constants/filters';
import { articleFilters } from '@/mock/filters';
import { articles } from '@/mock/articles';
import ArticleCard from '@/components/Card/ArticleCard';

const Articles = () => {
	const [filteredCard, setFilteredCards] = useState(articles);
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState(ArticleFiltersEnum.ALL);

	const handleChangeActivePage = (page: number) => {
		setPage(page);
	};

	const handleFilterChange = (filter: ArticleFiltersEnum) => {
		setPage(0);
		setFilter(filter);
	};

	useEffect(() => {
		const filtered = articles.filter(
			(card) =>
				card.category === filter || filter === ArticleFiltersEnum.ALL
		);
		setFilteredCards(filtered);
		// eslint-disable-next-line
	}, [filter, page]);

	return (
		<Container>
			<Filters
				activeFilter={filter}
				onClick={handleFilterChange}
				filters={articleFilters}
			/>
			<Cards>
				{filteredCard.slice(page * 6, page * 6 + 6).map((card, i) => (
					<ArticleCard key={i} {...card} />
				))}
			</Cards>
			<Pagination
				activePage={page}
				setActivePage={handleChangeActivePage}
				shownPageCount={4}
				pageCount={Math.ceil(filteredCard.length / 6)}
			/>
		</Container>
	);
};

export default Articles;
