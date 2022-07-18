import styled, { css, keyframes } from 'styled-components';

export interface DropdownMenuStylesProps {
	active: boolean;
	full?: boolean;
}

export const DropdownMenuStyles = styled.div<DropdownMenuStylesProps>`
	position: absolute;
	width: 100%;
	top: 100%;
	left: 0;
	opacity: 0;
	min-height: ${({ full }) => full && '100%'};
	visibility: ${({ active }) => (active ? '' : 'hidden')};
	transform-origin: top;
	transition: 300ms all;
	transform: scaleY(0);
	border-radius: 5px;
	background: ${({ theme }) => theme.palette.mainBg.color};
	backdrop-filter: ${({ theme }) => theme.palette.mainBg.filter};
	z-index: ${({ theme }) => theme.zIndex.dropdown};
	${({ active }) =>
		active &&
		css`
			transform: scaleY(1);
			opacity: 1;
		`}
`;
