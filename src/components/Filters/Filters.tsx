import { FiltersContainer } from 'components/Filters/Filters.styles';
import Button from 'components/ui/Button/Button';
import { FiltersEnum } from 'utils/constants/filters';
import { useState } from 'react';

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

	return (
		<FiltersContainer>
			{filters.map(({ title, filter }) => (
				<Button
					active={filter === activeFilter}
					key={title}
					full
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
