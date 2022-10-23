import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as Switch from '@radix-ui/react-switch';

export interface CheckboxLabelProps {
	focus?: boolean;
	active?: boolean;
}

export const SwitchThumb = styled(Switch.Thumb)`
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

export const SwitchRoot = styled(Switch.Root)`
	${({ theme, checked }) => css`
		display: block;
		position: relative;
		width: 3rem;
		height: 1.5rem;
		border: 1px solid ${theme.palette.white.light};
		border-radius: 25px;
		background: ${theme.palette.white.normal};
		transition: 200ms all;

		&:focus {
			outline: none;
		}

		&:focus-visible {
			box-shadow: 0 0 0 1px
				${checked
					? theme.palette.normal.hover
					: theme.palette.active.normal};
		}

		${checked &&
		css`
			border: none;
			background: ${theme.palette.active.normal};
			${SwitchThumb} {
				left: 98%;
				transform: translateX(-100%) translateY(-50%);
				background: white;
			}
		`}
	`}
`;
