import styled from 'styled-components';
import {
	BreakpointNames,
	BreakpointValuesEnum,
} from 'utils/constants/breakpoints';
import convertUnits from 'utils/helpers/convertUnits';
import { mediaQueries } from 'utils/constants/mediaQueries';

export interface ContainerProps {
	maxWidth?: BreakpointNames;

	p?: string | number;
}

export const Container = styled.div<ContainerProps>`
	width: 100%;
	max-width: ${({ maxWidth }) =>
		maxWidth ? convertUnits(BreakpointValuesEnum[maxWidth]) : '100%'};
	margin: 0 auto;
	padding: ${({ p }) => p};
	${mediaQueries.up.md} {
		width: 90%;
	}
`;
