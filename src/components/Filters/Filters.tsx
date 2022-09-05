import { FiltersContainer } from 'components/Filters/Filters.styles';
import Button from 'components/_ui/Button/Button';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import { IFilter } from 'types/Filter';
import { IFilters } from 'utils/constants/filters';

interface FiltersProps<TFilter> {
	activeFilter: TFilter;
	filters: IFilter<TFilter>[];
	onClick: (filter: TFilter) => void;
}

const Filters = <TFilter,>({
	filters,
	onClick,
	activeFilter,
}: FiltersProps<TFilter>) => {
	const handleClick = (filter: TFilter) => {
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
