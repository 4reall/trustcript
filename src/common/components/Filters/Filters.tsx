import {
	Container,
	ContainerProps,
} from 'src/common/components/Filters/Filters.styles';
import Button from 'src/common/components/_ui/Button/Button';

export interface IFilter<TFilters> {
	label: string;
	filter: TFilters;
}

interface FiltersBaseProps<TFilter> {
	activeFilter: TFilter;
	filters: IFilter<TFilter>[];
	onFilterChange: (filter: TFilter) => void;
	small?: boolean;
}

type FiltersProps<TFilter> = FiltersBaseProps<TFilter> & ContainerProps;

const Filters = <TFilter,>({
	filters,
	onFilterChange,
	activeFilter,
	small,
	columns,
	margin,
}: FiltersProps<TFilter>) => {
	const handleClick = (filter: TFilter) => {
		return () => onFilterChange(filter);
	};

	return (
		<Container columns={columns} margin={margin}>
			{filters.map(({ label, filter }) => (
				<Button
					active={filter === activeFilter}
					key={label}
					full
					small={small}
					onClick={handleClick(filter)}
					dark
					ripple={false}
				>
					{label}
				</Button>
			))}
		</Container>
	);
};

export default Filters;
