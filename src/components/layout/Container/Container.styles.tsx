import styled from 'styled-components';
import {
	BreakpointNames,
	BreakpointValuesEnum,
} from 'utils/constants/breakpoints';
import convertUnits from 'utils/helpers/convertUnits';
import { Padding, paddingMixin } from '../../../utils/mixins/paddings.mixin';
import { mq } from 'utils/mixins/mediaQueries';

export interface ContainerStylesProps {
	maxWidth?: BreakpointNames;
	padding?: Padding;
}

export const ContainerStyles = styled.div<ContainerStylesProps>`
	width: 100%;
	margin: 0 auto;
	max-width: ${({ maxWidth }) =>
		maxWidth ? convertUnits(BreakpointValuesEnum[maxWidth]) : '100%'};
	${({ padding }) => paddingMixin({ ...padding })}
`;
