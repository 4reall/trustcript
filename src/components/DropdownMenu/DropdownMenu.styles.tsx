import styled from 'styled-components';

export interface DropdownMenuStylesProps {
	active: boolean;
	left?: string | number;
}

export const DropdownMenuStyles = styled.div<DropdownMenuStylesProps>`
	position: absolute;
	width: 100%;
	top: 100%;
	left: 0;
	visibility: ${({ active }) => (active ? '' : 'hidden')};
	border-radius: 5px;
`;
