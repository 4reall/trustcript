import styled from '@emotion/styled';

import { mediaQueries } from 'src/common/utils/constants/mediaQueries';
import { css } from '@emotion/react';

export const ProductContainer = styled.article`
	display: flex;
	flex-direction: column;
	${mediaQueries.up.md} {
		flex-direction: row;
	}
`;

export const CarouselContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;

		${mediaQueries.up.lg} {
			width: 40%;
		}
	`}
`;

export const TextContainer = styled.div`
	margin-top: 1rem;
	${mediaQueries.up.md} {
		width: 50%;
		margin-left: 2rem;
	}
	${mediaQueries.up.lg} {
		width: 60%;
	}
`;
