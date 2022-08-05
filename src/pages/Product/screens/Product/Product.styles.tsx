import styled, { css } from 'styled-components';
import { Slide, SlideTruck } from 'components/Carousel/Carousel.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const ProductContainer = styled.div`
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

		${Slide} {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 1rem;
			background: ${theme.palette.white.extraLight};
			border: 2px solid ${theme.palette.white.light};
			& img {
				width: 80%;
				height: 100%;
			}
		}
		${SlideTruck} ~ div {
			margin-top: 1rem;
		}

		${mediaQueries.up.md} {
			width: 50%;
			${Slide} {
				& img {
					width: 70%;
					height: 60%;
				}
			}
		}
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
