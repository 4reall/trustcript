import styled from 'styled-components';
import { PaginationContainer } from 'components/_ui/Pagination/Pagination.styles';
import { FiltersContainer } from 'components/_layout/Filters/Filters.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const ProductsContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	${PaginationContainer} {
		margin: 2rem auto 0 auto;
	}
	${FiltersContainer} {
		grid-template-columns: repeat(2, 1fr);
		margin-bottom: 2rem;
		flex-grow: 0;
	}
	${mediaQueries.up.lg} {
		${FiltersContainer} {
			grid-template-columns: repeat(5, 1fr);
		}
	}
	${mediaQueries.up.xl} {
		${FiltersContainer} {
			grid-template-columns: repeat(7, 1fr);
		}
	}
`;
