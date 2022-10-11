import styled from '@emotion/styled';
import { mediaQueries } from '@/utils/constants/mediaQueries';
import { css } from '@emotion/react';

export interface ButtonStylesProps {
	full?: boolean;
	small?: boolean;
	disabled?: boolean;
	hide?: boolean;
}

export const ButtonBase = styled.button<ButtonStylesProps>`
	${({ theme, full, small, hide }) => css`
		display: ${hide && 'none'};
		position: relative;
		padding: 0.75rem 2rem;
		width: ${full ? '100%' : 'fit-content'};
		min-width: 8rem;
		border-radius: 4px;
		border: none;
		background: ${theme.palette.active.normal};
		color: ${theme.palette.normal.normal};
		transition: 300ms background-color;
		text-transform: uppercase;
		white-space: nowrap;
		flex-shrink: 0;
		cursor: pointer;

		font-family: ${theme.typography.h4.fontFamily};
		font-size: ${theme.typography.h4.fontSize};
		line-height: ${theme.typography.h4.lineHeight};

		&:hover:enabled {
			background: ${theme.palette.active.hover};
			color: ${theme.palette.normal.hover};
		}

		&:disabled {
			cursor: default;
		}

		${small &&
		css`
			min-width: 6rem;
			padding: 0.75rem;
			font-size: ${theme.typography.h5.fontSize};
			line-height: ${theme.typography.h5.lineHeight};
		`};

		${mediaQueries.down.md} {
			font-size: ${theme.typography.h5.fontSize};
			line-height: ${theme.typography.h5.lineHeight};
		}
	`}
`;

export const DarkBtn = styled(ButtonBase)`
	${({ theme }) => css`
		border: 2px solid ${theme.palette.white.extraLight};
		background: ${theme.palette.white.light};
		color: ${theme.palette.normal.normal};
		&:hover:enabled {
			border-color: ${theme.palette.white.light};
			background: ${theme.palette.white.normal};
			color: ${theme.palette.normal.hover};
		}
	`}
	}
`;
export const OutlinedBtn = styled(ButtonBase)`
	${({ theme }) => css`
		border: 2px solid ${theme.palette.active.active};
		background: transparent;
		&:hover:enabled {
			background: ${theme.palette.active.hover};
			color: ${theme.palette.normal.hover};
		}
	`}
`;
