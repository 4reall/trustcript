import { PopularContainer } from 'pages/Article/screens/Popular/Popular.styles';
import { Typography } from 'components/layout/Typography.styles';
import Filters from 'components/Filters/Filters';
import { DateFiltersEnum } from 'utils/constants/filters';
import { useEffect, useState } from 'react';
import { dateFilters } from 'utils/mock/filters';
import { IArticle } from 'types/Article';
import BtnCard from 'components/cards/BtnCard/BtnCard';
import { useLanguage } from 'hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { PathsEnum } from 'utils/constants/paths';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface PopularProps {
	articles: IArticle[];
}

const Popular = ({ articles }: PopularProps) => {
	const { text } = useLanguage('share');
	const navigate = useNavigate();
	const [activeFilter, setActiveFilter] = useState(DateFiltersEnum.DAY);
	const [filteredArticles, setFilteredArticles] = useState(articles);

	const handleFilterChange = (filter: DateFiltersEnum) => {
		setActiveFilter(filter);
	};

	const handleLinkClick = (id: string | number) => {
		return () => navigate(`${PathsEnum.Blog}/${id}`);
	};

	useEffect(() => {
		setFilteredArticles(
			articles.filter((article) => article.popularity === activeFilter)
		);
	}, [activeFilter]);

	return (
		<PopularContainer>
			<Typography variant="h2"></Typography>
			<Filters<DateFiltersEnum>
				activeFilter={activeFilter}
				filters={dateFilters}
				onClick={handleFilterChange}
			/>
			<TransitionGroup appear exit={false} component={null}>
				{filteredArticles.map(({ image, title, description, id }) => (
					<CSSTransition timeout={500} classNames="popular" key={id}>
						<BtnCard
							image={image}
							title={title}
							description={description}
							buttonText={text('moreBtn')}
							onClick={handleLinkClick(id)}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</PopularContainer>
	);
};

export default Popular;
