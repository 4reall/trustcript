import styled from 'styled-components';
import { PaginationContainer } from 'components/ui/Pagination/Pagination.styles';
import { FiltersContainer } from 'components/Filters/Filters.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const ProductsContainer = styled.section`
	padding: 2rem;
	${PaginationContainer} {
		position: absolute;
		right: 0;
		top: 50%;
	}

	${FiltersContainer} {
		margin-bottom: 2rem;
	}
	${mediaQueries.up.lg} {
		${FiltersContainer} {
			width: 70%;
			grid-template-columns: repeat(4, 1fr);
		}
	}
`;
