import styled, { css } from 'styled-components';

export const InputStyles = styled.input<{ textarea?: boolean }>`
	${({ theme, textarea }) => css`
		position: relative;
		padding: 0.5rem;
		width: 100%;
		border-radius: 5px;
		border: 1px solid ${theme.palette.white.light};
		outline: none;
		font-size: ${theme.typography.h4.fontSize};
		line-height: ${theme.typography.h4.lineHeight};
		background: ${theme.palette.white.extraLight};
		color: white;

		&:hover {
			border: 1px solid ${theme.palette.white.normal};
			background: ${theme.palette.white.light};
		}

		&:focus {
			border: 1px solid ${theme.palette.active.normal};
		}

		${textarea &&
		css`
			resize: none;
			height: 8rem;
		`}
	`}
`;
