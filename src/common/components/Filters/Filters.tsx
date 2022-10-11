import { Container, ContainerProps } from '@/components/Filters/Filters.styles';
import Button from '@/components/_ui/Button/Button';

export interface IFilter<TFilters> {
	label: string;
	filter: TFilters;
}

interface FiltersBaseProps<TFilter> {
	activeFilter: TFilter;
	filters: IFilter<TFilter>[];
	onClick: (filter: TFilter) => void;
	small?: boolean;
}

type FiltersProps<TFilter> = FiltersBaseProps<TFilter> & ContainerProps;

const Filters = <TFilter,>({
	filters,
	onClick,
	activeFilter,
	small,
	columns,
	margin,
}: FiltersProps<TFilter>) => {
	const handleClick = (filter: TFilter) => {
		return () => onClick(filter);
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
				>
					{label}
				</Button>
			))}
		</Container>
	);
};

export default Filters;
