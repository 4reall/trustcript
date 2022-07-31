import styled from 'styled-components';
import { PaginationContainer } from 'components/ui/Pagination/Pagination.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';
import { FiltersContainer } from 'components/Filters/Filters.styles';

export const ContentContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex: 1;

	${PaginationContainer} {
		margin: 2rem auto 0 auto;
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
