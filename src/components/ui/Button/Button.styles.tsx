import styled, { css } from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export interface ButtonStylesProps {
	full?: boolean;
	small?: boolean;
	center?: boolean;
	disabled?: boolean;
	hide?: boolean;
	active?: boolean;
}

export const ButtonBase = styled.button<ButtonStylesProps>`
	${({ theme, center, full, small, disabled, hide }) => css`
		display: ${hide && 'none'};
		position: relative;
		padding: 0.75rem 2rem;
		margin: ${center && '0 auto'};
		width: ${full ? '100%' : 'fit-content'};
		min-width: 8rem;
		border-radius: 4px;
		border: none;
		background: ${theme.palette.active.normal}
		color: ${theme.palette.normal.normal};
		transition: 200ms all;
		text-transform: uppercase;
		white-space: nowrap;
		flex-shrink: 0;
		
		font-family: ${theme.typography.h4.fontFamily};
		font-size: ${theme.typography.h4.fontSize};
		line-height: ${theme.typography.h4.lineHeight};

		&:hover {
			background: ${theme.palette.active.hover};
			color: ${theme.palette.normal.hover};
		}

		${
			small &&
			css`
				min-width: 6rem;
				padding: 0.75rem;
				font-size: ${theme.typography.h5.fontSize};
				line-height: ${theme.typography.h5.lineHeight};
			`
		};

		${mediaQueries.down.md} {
			font-size: ${theme.typography.h5.fontSize};
			line-height: ${theme.typography.h5.lineHeight};
			&:hover {
				background: ${theme.palette.active.normal};
				color: ${theme.palette.normal.normal};
			}
		}
		
		${
			disabled &&
			css`
				cursor: default !important;
				pointer-events: none;
			`
		}
	}
	`}
`;

export const DarkBtn = styled(ButtonBase)`
	${({ theme, active }) => css`
		border: 2px solid ${theme.palette.white.extraLight};
		background: ${theme.palette.white.light};
		color: ${({ theme }) => theme.palette.normal.normal};
		&:hover {
			border-color: ${theme.palette.white.light};
			background: ${({ theme }) => theme.palette.white.normal};
			color: ${({ theme }) => theme.palette.normal.hover};
		}
		${mediaQueries.down.md} {
			&:hover {
				background: transparent;
			}
		}
		${active &&
		css`
			background: #fff;
			color: #000;
		`}
	`}
	}
`;
export const OutlinedBtn = styled(ButtonBase)`
	${({ theme }) => css`
		border: 2px solid ${theme.palette.active.active};
		background: transparent;
		&:hover {
			background: ${({ theme }) => theme.palette.active.hover};
			color: ${({ theme }) => theme.palette.normal.hover};
		}
		${mediaQueries.down.md} {
			&:hover {
				border-color: ${theme.palette.white.light};
				background: ${theme.palette.white.normal};
				color: ${theme.palette.normal.hover};
			}
		}
	`}
`;
export const IconBtn = styled(ButtonBase)`
	${({ theme }) => css`
		min-width: unset;
		width: 3rem;
		height: 3rem;
		padding: 0.5rem;
		border-radius: 50%;
		overflow: hidden;
		background: transparent;
		& img {
			width: 100%;
			height: 100%;
		}
		&:hover {
			background: ${theme.palette.white.dark};
			// color: ${theme.palette.normal.hover};
		}
	`}
`;
// export const DarkBtn = styled()``
