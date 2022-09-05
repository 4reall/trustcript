import styled, { css } from 'styled-components';
import { ButtonBase } from 'components/_ui/Button/Button.styles';

export interface PaginationContainerProps {
	vertical?: boolean;
}

export const PaginationContainer = styled.div<PaginationContainerProps>`
	${({ vertical }) => css`
		display: flex;
		align-items: center;

		${ButtonBase} {
			width: 2rem;
			height: 2rem;
		}

		${vertical &&
		css`
			flex-direction: column;
			${PaginationBtnContainer} {
				height: 12rem;
				width: 4rem;
				margin: 0.5rem 0;
				flex-direction: column;
				align-items: center;
			}
			${PaginationBtnTruck} {
				flex-direction: column;
				align-items: center;
			}
			${PaginationButton} {
				height: 25%;
				width: 100%;
			}
			${ButtonBase} {
				width: 2.5rem;
				height: 2.5rem;
			}
		`}
	`}
`;

export const PaginationBtnContainer = styled.div`
	${({ theme }) => css`
		padding: 0.35rem;
		margin: 0 0.5rem;
		height: 3rem;
		width: 10rem;
		border-radius: 8px;
		border: 1px solid ${theme.palette.white.normal};
		background: ${theme.palette.white.extraLight};
		overflow: hidden;
	`}
`;

export const PaginationBtnTruck = styled.div`
	display: flex;
	height: 100%;
	transition: 200ms all;
`;

interface PaginationButtonProps {
	active: boolean;
}

export const PaginationButton = styled.button<PaginationButtonProps>`
	${({ theme, active }) => css`
		width: 25%;
		flex-shrink: 0;
		border: none;
		background: transparent;
		border-radius: 8px;
		transition: 200ms all;
		cursor: pointer;

		&:hover {
			background: ${theme.palette.white.light};
		}

		${active &&
		css`
			background: ${theme.palette.white.normal} !important;
		`}
	`}
`;
