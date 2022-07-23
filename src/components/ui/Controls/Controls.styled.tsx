import styled from 'styled-components';
import convertUnits from 'utils/helpers/convertUnits';
import { mediaQueries } from 'utils/constants/mediaQueries';

export interface ControlsContainerProps {
	mt?: number | string;
}
export interface ControlsBtnProps {
	active?: boolean;
}

export const ControlsContainer = styled.div<ControlsContainerProps>`
	margin: ${({ mt }) => convertUnits(mt) && 0} auto 0 auto;
	display: flex;
	justify-content: space-between;
	width: 60%;
	height: 1.5rem;
	${mediaQueries.up.md} {
		height: 2rem;
	}
`;

export const ControlsBtn = styled.button<ControlsBtnProps>`
	position: relative;
	padding: 0.7rem 0 0.7rem 0;
	margin-right: 0.5rem;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	transition: 200ms all;
	background: transparent;
	cursor: pointer;

	&:last-child {
		margin-right: 0;
	}

	&:before {
		border-radius: 4px;
		width: 100%;
		height: 100%;
		content: '';
		background: ${({ theme, active }) =>
			active ? theme.palette.active.normal : theme.palette.white.light};
	}

	${mediaQueries.up.md} {
		padding: 0.85rem 0 0.85rem 0;
	}
`;
