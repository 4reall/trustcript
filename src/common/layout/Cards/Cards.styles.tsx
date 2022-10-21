import styled from '@emotion/styled';
import { mediaQueries } from '@/common/utils/constants/mediaQueries';
import { CardContainer } from '@/common/layout/Card/Card.styles';

export const CardsContainer = styled.div`
	height: 100%;
`;

export const Grid = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: 100%;

	${mediaQueries.up.sm} {
		grid-template-columns: repeat(2, calc(100% / 2 - 0.5rem));
	}

	${mediaQueries.up.lg} {
		grid-template-columns: repeat(3, calc(100% / 3 - 0.5rem));
	}
	& > div {
		width: 100%;
		height: 100%;
		//background: red;
	}

	.card-appear {
		opacity: 0;
		//display: none;
	}
	.card-appear-active {
		opacity: 1;
		transition: opacity 500ms ease-in;
	}

	.card-enter {
		opacity: 0;
		//display: none;
	}
	.card-enter-active {
		opacity: 1;
		transition: opacity 500ms ease-in;
	}
	.card-enter-done {
		//display: block;
	}
`;
