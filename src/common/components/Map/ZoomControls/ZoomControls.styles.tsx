import styled from '@emotion/styled';
import convertUnits from '@/utils/helpers/convertUnits';
import { css } from '@emotion/react';

export interface ZoomControlsContainerProps {
	position?: {
		left?: string | number;
		right?: string | number;
		top?: string | number;
		bottom?: string | number;
	};
}

export const ZoomControlsContainer = styled.div<ZoomControlsContainerProps>`
	position: ${({ position }) => (position ? 'absolute' : '')};
	width: 2rem;
	height: 4rem;
	display: flex;
	flex-direction: column;
	border-radius: 25px;
	border: 2px solid ${({ theme }) => theme.palette.white.normal};
	background: rgba(86, 90, 96, 1);
	${({ position }) => css`
		left: ${convertUnits(position?.left)};
		right: ${convertUnits(position?.right)};
		bottom: ${convertUnits(position?.bottom)};
		top: ${convertUnits(position?.top)};
	`}
`;

export const ZoomControlsPlus = styled.button`
	position: relative;
	width: 100%;
	flex: 1;
	border: none;
	background: transparent;
	overflow: hidden;
	border-top-right-radius: 50%;
	border-top-left-radius: 50%;
	left: 0;
	margin: 0;
	padding: 0;

	&:before {
		position: absolute;
		content: '';
		height: 2px;
		width: 50%;
		background: white;
		border-radius: 4px;
		transform: translateX(-50%) translateY(-50%);
	}
	&:after {
		position: absolute;
		content: '';
		height: 50%;
		width: 2px;
		background: white;
		border-radius: 4px;

		transform: translateX(-50%) translateY(-50%);
	}
`;
export const ZoomControlsMinus = styled.button`
	position: relative;
	width: 100%;
	flex: 1;
	border: none;
	background: transparent;
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
	left: 0;
	padding: 0;
	margin: 0;

	overflow: hidden;
	&:before {
		position: absolute;
		content: '';
		height: 2px;
		width: 50%;
		background: white;
		border-radius: 4px;
		transform: translateX(-50%) translateY(-50%);
	}
`;
