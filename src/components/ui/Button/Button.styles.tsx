import styled, { css } from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export interface ButtonStylesProps {
	outlined?: boolean;
	dark?: boolean;
	full?: boolean;
	small?: boolean;
	center?: boolean;
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
	position: relative;
	padding: 0.75rem 2rem;
	margin: ${({ center }) => center && '0 auto'};
	width: ${({ full }) => (full ? '100%' : 'fit-content')};
	min-width: 8rem;
	border-radius: 4px;
	border: none;
	//outline: none;
	background: ${({ theme }) => theme.palette.active.normal};
	color: ${({ theme }) => theme.palette.normal.normal};
	transition: 200ms all;
	text-transform: uppercase;

	${({ theme }) => css`
		font-family: ${theme.typography.h4.fontFamily};
		font-size: ${theme.typography.h4.fontSize};
		line-height: ${theme.typography.h4.lineHeight};
	`}

	&:hover {
		background: ${({ theme }) => theme.palette.active.hover};
		color: ${({ theme }) => theme.palette.normal.hover};
	}

	${({ theme, outlined }) =>
		outlined &&
		css`
			border: 2px solid ${theme.palette.active.active};
			background: transparent;
			&:hover {
				background: ${({ theme }) => theme.palette.active.hover};
				color: ${({ theme }) => theme.palette.normal.hover};
			}
		`}

	${({ theme, dark }) =>
		dark &&
		css`
			border: 2px solid ${theme.palette.white.border};
			background: ${theme.palette.white.normal};
			&:hover {
				border-color: ${theme.palette.white.normal};
				background: ${({ theme }) => theme.palette.white.hover};
				color: ${({ theme }) => theme.palette.normal.hover};
			}
		`}

	${({ theme, small }) =>
		small &&
		css`
			min-width: 6rem;
			padding: 0.75rem;
			font-size: ${theme.typography.h3.fontSize};
			line-height: ${theme.typography.h3.lineHeight};
		`};

	${mediaQueries.down.md} {
		font-size: ${({ theme }) => theme.typography.h5.fontSize};
		line-height: ${({ theme }) => theme.typography.h5.lineHeight};
		&:hover {
			background: ${({ theme }) => theme.palette.active.normal};
			color: ${({ theme }) => theme.palette.normal.normal};
		}
		${({ theme, outlined }) =>
			outlined &&
			css`
				&:hover {
					background: transparent;
				}
			`}
		${({ theme, dark }) =>
			dark &&
			css`
				&:hover {
					border-color: ${theme.palette.white.normal};
					background: ${({ theme }) => theme.palette.white.hover};
					color: ${({ theme }) => theme.palette.normal.hover};
				}
			`}
	}
`;
