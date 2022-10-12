import styled from '@emotion/styled';
import { convertSpacing, SpacingArray } from '@/utils/helpers/convertSpacing';
import { css } from '@emotion/react';

export interface PaginationContainerProps {
	vertical?: boolean;
	m?: SpacingArray;
}

export const PaginationContainer = styled.div<PaginationContainerProps>`
	${({ vertical, m }) => css`
		display: flex;
		align-items: center;
		margin: ${m ? convertSpacing(m) : ''};

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
