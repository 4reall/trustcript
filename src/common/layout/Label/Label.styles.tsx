import styled from '@emotion/styled';
import convertUnits from '@/common/utils/helpers/convertUnits';
import { css } from '@emotion/react';

export interface LabelContainerProps {
	position?: {
		left?: string | number;
		right?: string | number;
		top?: string | number;
		bottom?: string | number;
	};
	dark?: boolean;
	small?: boolean;
}

export const LabelContainer = styled.div<LabelContainerProps>`
	${({ position, theme, dark, small }) => css`
		position: ${position && 'absolute'};
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30px;
		padding: 0.75rem 1rem;
		background: ${theme.palette.active.active};
		left: ${convertUnits(position?.left)};
		right: ${convertUnits(position?.right)};
		bottom: ${convertUnits(position?.bottom)};
		top: ${convertUnits(position?.top)};
		& > *:first-of-type {
			display: inline-block;
			margin-right: 0.5rem;
		}

		${dark &&
		css`
			background: ${theme.palette.white.extraLight};
			border: 1px solid ${theme.palette.white.light};
			backdrop-filter: blur(300px);
		`}

		${small &&
		css`
			padding: 0.5rem 0.75rem;
		`}
	`}
`;
