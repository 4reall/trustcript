import styled from 'styled-components';
import { PaginationContainer } from 'components/ui/Pagination/Pagination.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';
import { FiltersContainer } from 'components/Filters/Filters.styles';

export const ContentContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;

	${PaginationContainer} {
		margin: 2rem auto 0 auto;
	}
	${mediaQueries.up.xl} {
		padding: 0 1rem;

		${PaginationContainer} {
			position: absolute;
			right: -3.5rem;
			top: 50%;
			transform: translateY(-50%);
		}
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
`;
