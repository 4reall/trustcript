import styled from 'styled-components';
import { BreakpointValuesEnum } from 'utils/constants/breakpoints';
import convertUnits from 'utils/helpers/convertUnits';

export interface ContainerProps {
	maxWidth?: keyof typeof BreakpointValuesEnum;
}

export const Container = styled.div<ContainerProps>`
	width: 100%;
	max-width: ${({ maxWidth }) =>
		maxWidth ? convertUnits(BreakpointValuesEnum[maxWidth]) : '100%'};
	margin: 0 auto;
`;
