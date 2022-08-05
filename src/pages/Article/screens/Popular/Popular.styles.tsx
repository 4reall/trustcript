import styled from 'styled-components';
import { FiltersContainer } from 'components/Filters/Filters.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';
import {
	CardContainer,
	ImgContainer,
	TextContainer,
} from 'components/cards/BtnCard/BtnCard.styles';

export const PopularContainer = styled.div`
	margin-top: 2rem;
	${FiltersContainer} {
		grid-template-columns: repeat(3, 1fr);
	}
	${CardContainer} {
		margin-top: 2rem;
		${mediaQueries.up.xl} {
			flex-direction: row;

			${ImgContainer} {
				width: 40%;
			}

			${TextContainer} {
				${mediaQueries.up.lg} {
					margin-top: 0;
					width: 60%;
				}
			}
		}
	}

	${mediaQueries.up.md} {
		width: 40%;
		margin-top: 0;
		${FiltersContainer} {
			grid-template-columns: repeat(1, 1fr);
		}
	}
	${mediaQueries.up.lg} {
		${FiltersContainer} {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.popular-enter {
		opacity: 0;
	}
	.popular-enter-active {
		opacity: 1;
		transition: opacity 500ms ease-in;
	}
`;

export const BtnCardContainer = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(1, 1fr);
	${mediaQueries.up.sm} {
		grid-template-columns: repeat(2, 1fr);
	}
	${mediaQueries.up.md} {
		grid-template-columns: repeat(1, 1fr);
	}
`;
