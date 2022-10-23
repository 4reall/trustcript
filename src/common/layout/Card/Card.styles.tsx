import styled from '@emotion/styled';
import { css, keyframes, Theme } from '@emotion/react';

export const CardContainer = styled.div`
	padding: 1rem;
	background: ${({ theme }) => theme.palette.white.light};
	border-radius: 20px;
	border: 1px solid ${({ theme }) => theme.palette.white.normal};

	& a {
		text-decoration: none;
	}
`;

export const ContentContainer = styled.div`
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	overflow: hidden;
`;

export const TextContainer = styled.div`
	& > * {
		display: block;
		margin-bottom: 0.5rem;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

export const LabelsContainer = styled.div`
	position: relative;

	& > img {
		width: 100%;
		min-height: 10rem;
	}
`;

const skeletonKeyframes = keyframes`
	to {
		transform: translateX(100%);
	}
`;

const shineAnimation = (theme: Theme) => {
	return css`
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		opacity: 1;
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0) 10%,
			${theme.palette.white.normal} 47%,
			${theme.palette.white.normal} 52%,
			rgba(255, 255, 255, 0) 90%
		);
		transform: translateX(-100%);
		animation: ${skeletonKeyframes} 2s infinite;
	`;
};

export const SkeletonContent = styled.div`
	position: relative;
	width: 100%;
	height: 11rem;
	background: ${({ theme }) => theme.palette.white.normal};
	border-radius: 1rem;
	overflow: hidden;
	backdrop-filter: blur(10px);

	&:after {
		${({ theme }) => shineAnimation(theme)}
	}
`;

export const SkeletonText = styled.span`
	${TextContainer} > &:nth-of-type(1) {
		position: relative;
		margin-top: 1rem;
		width: 100%;
		height: 1.5rem;
		background: ${({ theme }) => theme.palette.white.dark};
		border-radius: 1rem;
		overflow: hidden;
		backdrop-filter: blur(100px);
		&:after {
			${({ theme }) => shineAnimation(theme)}
		}
		}
	}
	${TextContainer} > &:nth-of-type(2) {
		position: relative;
		width: 70%;
		height: 1rem;
		background: ${({ theme }) => theme.palette.white.dark};
		border-radius: 1rem;
		overflow: hidden;
		&:after {
			${({ theme }) => shineAnimation(theme)}

		}
	}
`;
