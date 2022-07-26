import styled from '@emotion/styled';
import { mediaQueries } from 'src/common/utils/constants/mediaQueries';
import {
	CardContainer,
	ImgContainer,
	TextContainer,
} from 'src/common/layout/BtnCard/BtnCard.styles';

export const SimilarContainer = styled.article`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;

	${CardContainer} {
		${mediaQueries.up.md} {
			flex-direction: row;

			${ImgContainer} {
				width: 40%;
				& img {
					object-fit: contain;
				}
			}
		}

		${TextContainer} {
			${mediaQueries.up.md} {
				margin-top: 0;
				width: 60%;
			}
		}
	}

	${mediaQueries.up.md} {
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}
`;
