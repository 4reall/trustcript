import styled from '@emotion/styled';
import { mediaQueries } from '@/common/utils/constants/mediaQueries';
import {
	CardContainer,
	ImgContainer,
	TextContainer,
} from '@/common/layout/BtnCard/BtnCard.styles';

export const PopularContainer = styled.div`
	margin-top: 2rem;
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
	}
	${mediaQueries.up.lg} {
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
