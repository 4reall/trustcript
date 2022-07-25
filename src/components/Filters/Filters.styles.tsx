import { ButtonBase } from 'components/ui/Button/Button.styles';
import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const FiltersContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
	flex: 1;

	${ButtonBase} {
		width: 100%;
	}
`;

export const FiltersWindow = styled.div`
	width: 100%;
	margin: 0 0.5rem;
	overflow: hidden;
`;

interface FiltersTruckProps {
	filtersCount?: number;
}

export const FiltersTruck = styled.div<FiltersTruckProps>`
	display: flex;
	justify-content: space-between;
	${ButtonBase} {
		flex-shrink: 0;
		margin-left: 0.5rem;
		min-width: calc(25% - 0.5rem);

		&:first-child {
			margin-left: 0;
		}
	}
	${mediaQueries.up.md} {
		${ButtonBase} {
			flex-shrink: 0;
			margin-left: 0.5rem;
			//width: calc(25% - 0.5rem);
		}
	}
`;
