import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface DropdownMenuStylesProps {
	active: boolean;
	full?: boolean;
}

export const DropdownMenuStyles = styled.div<DropdownMenuStylesProps>`
	${({ theme, active, full }) => css`
		position: absolute;
		width: 100%;
		top: 100%;
		left: 0;
		opacity: 0;
		min-height: ${full && '100%'};
		visibility: ${active ? '' : 'hidden'};
		transform-origin: top;
		transition: 300ms all;
		transform: scaleY(0);
		border-radius: ${full ? '0' : '5px'};
		background: ${theme.palette.mainBg.color};
		z-index: ${theme.zIndex.dropdown};
		overflow: ${full ? '' : 'hidden'};
		${active &&
		css`
			transform: scaleY(1);
			opacity: 1;
		`}
	`}
`;
