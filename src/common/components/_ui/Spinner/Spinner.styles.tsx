import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 220;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 150, 220;
        stroke-dashoffset: -70;
    }
    100% {
        stroke-dasharray: 150, 220;
        stroke-dashoffset: -219;
    }
`;

const dashSmall = keyframes`
	0% {
		stroke-dasharray: 1, 150;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -35;
	}
	100% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -124;
	}
`;

export interface SpinnerSvgProps {
	small?: boolean;
}

export const SpinnerContainer = styled.div`
	margin: 0 auto;
	width: fit-content;
`;

export const SpinnerSvg = styled.svg<SpinnerSvgProps>`
	${({ theme, small }) => css`
		animation: ${rotate} 2s linear infinite;
		margin: 0 auto;
		width: 100px;
		height: 100px;
		& circle {
			stroke: ${theme.palette.active.normal};
			stroke-linecap: round;
			stroke-width: 10px;
			animation: ${dash} 1.5s ease-in-out infinite;
		}
		${small &&
		css`
			width: 50px;
			height: 50px;
			& circle {
				stroke-width: 5px;
				animation: ${dashSmall} 1.5s ease-in-out infinite;
			}
		`}
	`}
`;
