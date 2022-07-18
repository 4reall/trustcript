import styled, { css } from 'styled-components';
import burger from 'components/Header/components/Burger/Burger';

export interface BurgerContainerProps {
	active: boolean;
}

export const BurgerContainer = styled.button<BurgerContainerProps>`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 3rem;
	height: 1.5rem;
	padding: 0.5rem;
	border: none;
	outline: none;
	background: inherit;

	&:before {
		position: absolute;
		left: 0.5rem;
		top: ${({ active }) => (active ? '50%' : 0)};
		content: '';
		width: calc(100% - 1rem);
		height: 2px;
		border-radius: 2px;
		background: ${({ theme }) => theme.palette.normal.normal};
		transition: 250ms all;
		transform-origin: center;
		transform: ${({ active }) => active && 'rotate(45deg)'};
	}
	&:after {
		position: absolute;
		left: 0.5rem;
		top: ${({ active }) => (active ? '50%' : '100%')};
		content: '';
		width: calc(100% - 1rem);
		height: 2px;
		border-radius: 2px;
		background: ${({ theme }) => theme.palette.normal.normal};
		transition: 250ms all;
		transform-origin: center;
		transform: ${({ active }) => active && 'rotate(-45deg)'};
	}
	& span {
		transition: 100ms opacity;
		opacity: ${({ active }) => (active ? '0' : '1')};
	}
`;

export const BurgerBar = styled.span`
	left: 0;
	display: block;
	width: 100%;
	height: 2px;
	border-radius: 2px;
	background: ${({ theme }) => theme.palette.normal.normal};
`;
