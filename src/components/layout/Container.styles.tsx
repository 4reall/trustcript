import styled from 'styled-components';
import {
	BreakpointNames,
	BreakpointValuesEnum,
} from 'utils/constants/breakpoints';
import convertUnits from 'utils/helpers/convertUnits';

export interface ContainerProps {
	maxWidth?: BreakpointNames;

	p?: string | number;
}

export const Container = styled.div<ContainerProps>`
	width: 100%;
	margin: 0 auto;
	max-width: ${({ maxWidth }) =>
		maxWidth ? convertUnits(BreakpointValuesEnum[maxWidth]) : '100%'};
	padding: ${({ p }) => p};
`;
