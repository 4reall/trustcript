import { FiltersContainer } from 'components/_layout/Filters/Filters.styles';
import Button from 'components/_ui/Button/Button';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import { IFilter } from 'types/Filter';
import { IFilters } from 'utils/constants/filters';

interface FiltersProps<TFilter> {
	activeFilter: TFilter;
	filters: IFilter<TFilter>[];
	onClick: (filter: TFilter) => void;
	small?: boolean;
}

const Filters = <TFilter extends unknown>({
	filters,
	onClick,
	activeFilter,
	small,
}: FiltersProps<TFilter>) => {
	const handleClick = (filter: TFilter) => {
		return () => onClick(filter);
	};

	return (
		<FiltersContainer>
			{filters.map(({ label, filter }) => (
				<Button
					active={filter === activeFilter}
					key={label}
					full
					small={small}
					onClick={handleClick(filter)}
					dark
				>
					{label}
				</Button>
			))}
		</FiltersContainer>
	);
};

export default Filters;
