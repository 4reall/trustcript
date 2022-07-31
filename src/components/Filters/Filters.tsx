import { FiltersContainer } from 'components/Filters/Filters.styles';
import Button from 'components/ui/Button/Button';

import { FiltersEnum } from 'utils/constants/filters';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

export interface IFilter {
	title: string;
	filter: FiltersEnum;
}

interface FiltersProps {
	activeFilter: FiltersEnum;
	filters: IFilter[];
	onClick: (filter: FiltersEnum) => void;
}

const Filters = ({ filters, onClick, activeFilter }: FiltersProps) => {
	const handleClick = (filter: FiltersEnum) => {
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
