import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface BurgerTestContainerProps {
	active: boolean;
}

export const BurgerContainer = styled.button<BurgerTestContainerProps>`
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 2rem;
	width: 2rem;
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;

	& span {
		&:nth-of-type(1) {
			${({ active }) =>
				active &&
				css`
					left: 0;
					top: 50%;
					transform: rotate(45deg);
				`};
		}
		&:nth-of-type(2) {
			opacity: ${({ active }) => (active ? '0' : '1')};
		}

		&:nth-of-type(3) {
			${({ active }) =>
				active &&
				css`
					left: 0;
					top: 50%;
					transform: rotate(-45deg);
				`};
		}
	}
`;

export const BurgerBar = styled.span`
	position: absolute;
	left: 0;
	display: block;
	width: 100%;
	background: ${({ theme }) => theme.palette.normal.normal};
	height: 2px;
	transition: 200ms all;
	&:nth-of-type(1) {
		top: 20%;
	}
	&:nth-of-type(2) {
		top: 50%;
	}
	&:nth-of-type(3) {
		top: 80%;
	}
`;
