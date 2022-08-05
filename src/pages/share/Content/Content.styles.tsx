import styled from 'styled-components';
import { PaginationContainer } from 'components/ui/Pagination/Pagination.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';
import { FiltersContainer } from 'components/Filters/Filters.styles';

export const ContentContainer = styled.div`
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
