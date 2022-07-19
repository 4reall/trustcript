import styled from 'styled-components';

export interface ControlsContainerProps {}
export const ControlsContainer = styled.div<ControlsContainerProps>`
	display: flex;
	width: 60%;
	height: 1rem;
	margin: 0 auto;
`;

export const ControlsBtn = styled.button`
	flex: 1;
	border: none;
	outline: none;
`;
