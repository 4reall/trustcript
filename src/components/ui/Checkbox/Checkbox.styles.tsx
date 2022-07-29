import styled, { css } from 'styled-components';

export interface CheckboxLabelProps {
	focus: boolean;
	active: boolean;
}

export const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
	${({ theme, active, focus }) => css`
		display: block;
		position: relative;
		width: 3rem;
		height: 1.5rem;
		border: 1px solid ${theme.palette.white.light};
		border-radius: 20px;
		background: ${theme.palette.white.normal};
		transition: 200ms all;

		${active &&
		css`
			border: none;
			background: ${({ theme }) => theme.palette.active.normal};
			${Circle} {
				left: 98%;
				transform: translateX(-100%) translateY(-50%);
				background: white;
			}
		`}

		${focus &&
		!active &&
		css`
			box-shadow: 0 0 10px ${theme.palette.active.normal};
		`}
	`}
`;

export const Circle = styled.span`
	position: absolute;
	display: block;
	border-radius: 50%;
	width: 1.25rem;
	height: 1.25rem;
	top: 50%;
	left: 2%;
	transform: translateY(-50%);
	background: ${({ theme }) => theme.palette.white.normal};
	transition: 200ms all;
`;

export const CheckboxInput = styled.input`
	position: absolute;
	opacity: 0;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`;
