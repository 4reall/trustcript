import styled from 'styled-components';
import { FiltersContainer } from 'components/Filters/Filters.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';
import { CardContainer } from 'components/cards/BtnCard/BtnCard.styles';

export const PopularContainer = styled.div`
	${FiltersContainer} {
		grid-template-columns: repeat(1, 1fr);
	}
	${CardContainer} {
		margin-top: 2rem;
	}
	${mediaQueries.up.md} {
		width: 40%;
	}
	${mediaQueries.up.lg} {
		${FiltersContainer} {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.popular-enter {
		opacity: 0;
		//display: none;
	}
	.popular-enter-active {
		opacity: 1;
		transition: opacity 500ms ease-in;
	}
	.popular-enter-done {
		//display: block;
	}
`;
