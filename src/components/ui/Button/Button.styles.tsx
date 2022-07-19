import styled, { css } from 'styled-components';

export interface ButtonStyles {
	outlined?: boolean;
	dark?: boolean;
	full?: boolean;
	small?: boolean;
	center?: boolean;
}

export const ButtonStyles = styled.button<ButtonStyles>`
	position: relative;
	padding: 0.75rem 2rem;
	margin: ${({ center }) => center && '0 auto'};
	width: ${({ full }) => (full ? '100%' : 'fit-content')};
	border-radius: 4px;
	border: none;
	outline: none;
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
			padding: 0.75rem;
			font-size: ${theme.typography.h3.fontSize};
			line-height: ${theme.typography.h3.lineHeight};
		`}
`;
