import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface IconButtonStylesProps {
	small?: boolean;
	hide?: boolean;
	disabled?: boolean;
}

export const IconButtonStyles = styled.button<IconButtonStylesProps>`
	${({ theme, small, hide }) => css`
		position: relative;
		display: ${hide ? 'none' : 'flex'};
		justify-content: center;
		align-items: center;
		min-width: unset;
		width: 3rem;
		height: 3rem;
		padding: 0.5rem;
		border-radius: 50%;
		overflow: hidden;
		border: none;
		background: transparent;
		cursor: pointer;

		&:hover {
			background: ${theme.palette.white.dark};
			// color: ${theme.palette.normal.hover};
		}
		&:disabled:hover {
			background: transparent;
			cursor: initial;
		}
		${small &&
		css`
			width: 2rem;
			height: 2rem;
			padding: 0.3rem;
		`}
	`}
`;
