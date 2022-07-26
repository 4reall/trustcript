import styled from 'styled-components';
import { PaginationContainer } from 'components/ui/Pagination/Pagination.styles';
import { FiltersContainer } from 'components/Filters/Filters.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const ProductsContainer = styled.section`
	padding: 2rem 4rem;
	${PaginationContainer} {
		position: fixed;
		right: 0;
		top: 50vh;
		transform: translateY(-50%);
	}

	${FiltersContainer} {
		grid-template-columns: repeat(2, 1fr);
		margin-bottom: 2rem;
	}
	${mediaQueries.up.lg} {
		${FiltersContainer} {
			width: 70%;
			grid-template-columns: repeat(4, 1fr);
		}
	}
	${mediaQueries.up.xl} {
		${PaginationContainer} {
			position: fixed;
			right: 1%;
			top: 50vh;
			transform: translateY(-50%);
		}
	}
	${mediaQueries.up.xxl} {
		${PaginationContainer} {
			position: fixed;
			right: 14%;
			top: 50vh;
			transform: translateY(-50%);
		}
	}
`;
