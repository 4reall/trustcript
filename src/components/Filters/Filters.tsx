import { FiltersContainer } from 'components/Filters/Filters.styles';
import Button from 'components/ui/Button/Button';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import { IFilter } from 'types/Filter';
import { IFilters } from 'utils/constants/filters';

interface FiltersProps {
	activeFilter: IFilters;
	filters: IFilter<IFilters>[];
	onClick: (filter: IFilters) => void;
}

const Filters = ({ filters, onClick, activeFilter }: FiltersProps) => {
	const handleClick = (filter: IFilters) => {
		return () => onClick(filter);
	};
	const isMd = useMediaQuery(queries.up.md);

	return (
		<FiltersContainer>
			{filters.map(({ title, filter }) => (
				<Button
					active={filter === activeFilter}
					key={title}
					full
					small={!isMd}
					onClick={handleClick(filter)}
					dark
				>
					{title}
				</Button>
			))}
		</FiltersContainer>
	);
};

export default Filters;
