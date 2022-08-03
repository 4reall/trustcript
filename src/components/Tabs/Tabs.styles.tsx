import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';
import { CardContainer } from 'components/Card/Card.styles';

export const TabsContainer = styled.div`
	height: 100%;
	${mediaQueries.up.sm} {
	}

	${mediaQueries.up.md} {
	}
`;

export const Cards = styled.div`
	display: grid;
	gap: 0.5rem;
	grid-template-columns: 100%;
	justify-content: space-between;

	${CardContainer} {
		width: 100%;
	}

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
