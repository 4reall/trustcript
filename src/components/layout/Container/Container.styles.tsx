import styled from 'styled-components';
import {
	BreakpointNames,
	BreakpointValuesEnum,
} from 'utils/constants/breakpoints';
import convertUnits from 'utils/helpers/convertUnits';

export interface ContainerStylesProps {
	maxWidth?: BreakpointNames | undefined;
}

export const ContainerStyles = styled.div<ContainerStylesProps>`
	max-width: ${({ maxWidth }) =>
		maxWidth ? convertUnits(BreakpointValuesEnum[maxWidth]) : '100%'};
	width: 100%;
	margin: 0 auto;
	padding: 0 1rem;
`;
