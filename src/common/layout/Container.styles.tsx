import styled from '@emotion/styled';
import { BreakpointValuesEnum } from 'src/common/utils/constants/breakpoints';
import convertUnits from 'src/common/utils/helpers/convertUnits';

export interface ContainerProps {
	maxWidth?: keyof typeof BreakpointValuesEnum;
}

export const Container = styled.div<ContainerProps>`
	width: 100%;
	max-width: ${({ maxWidth }) =>
		maxWidth ? convertUnits(BreakpointValuesEnum[maxWidth]) : '100%'};
	margin: 0 auto;
`;
