import {
	BtnCardContainer,
	PopularContainer,
} from 'src/modules/Article/components/Popular/Popular.styles';
import { Typography } from 'src/common/layout/Typography.styles';
import Filters from 'src/common/components/Filters/Filters';
import { DateFiltersEnum } from 'src/common/utils/constants/filters';
import { useEffect, useState } from 'react';
import { dateFilters } from 'src/mock/filters';
import { IArticle } from 'src/common/types/Article';
import BtnCard from 'src/common/layout/BtnCard/BtnCard';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRouter } from 'next/router';

interface PopularProps {
	articles: IArticle[];
}

const Popular = ({ articles }: PopularProps) => {
	const { push } = useRouter();
	const [activeFilter, setActiveFilter] = useState(DateFiltersEnum.DAY);
	const [filteredArticles, setFilteredArticles] = useState(articles);

	const handleFilterChange = (filter: DateFiltersEnum) => {
		setActiveFilter(filter);
	};

	const handleLinkClick = (id: string | number) => {
		return () => push(`../${id}`);
	};

	useEffect(() => {
		setFilteredArticles(
			articles.filter((article) => article.popularity === activeFilter)
		);
	}, [activeFilter]);

	return (
		<PopularContainer>
			<Typography as="h3" m={['2rem', 0, 0, 0]} variant="h2">
				{text('popular')}
			</Typography>
			<Filters<DateFiltersEnum>
				activeFilter={activeFilter}
				filters={dateFilters}
				onFilterChange={handleFilterChange}
			/>
			<BtnCardContainer>
				<TransitionGroup appear exit={false} component={null}>
					{filteredArticles.map(
						({
							image,
							title,
							description,
							id,
							category,
							categoryIcon,
							views,
						}) => (
							<CSSTransition
								timeout={500}
								classNames="popular"
								key={id}
							>
								<BtnCard
									image={image}
									title={title}
									description={description}
									buttonText={text('btn')}
									onClick={handleLinkClick(id)}
									labels={{
										category,
										categoryIcon,
										views,
									}}
								/>
							</CSSTransition>
						)
					)}
				</TransitionGroup>
			</BtnCardContainer>
		</PopularContainer>
	);
};

export default Popular;
