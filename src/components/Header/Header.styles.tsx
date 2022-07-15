import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';
import { Margin, marginMixin } from 'utils/mixins/margin.mixin';
import { Padding, paddingMixin } from 'utils/mixins/paddings.mixin';

export interface HeaderStylesProps {
	margin?: Margin;
	padding?: Padding;
}

export const HeaderStyles = styled.header<HeaderStylesProps>`
	max-width: 100%;
	min-height: ${({ theme }) => theme.spacing.headerHeight.xs};
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.palette.mainBg.color};
	backdrop-filter: ${({ theme }) => theme.palette.mainBg.filter};
	${({ margin }) => marginMixin({ ...margin })};
	${({ padding }) => paddingMixin({ ...padding })};

	// ${mediaQueries.up.sm} {
	// 	min-height: ${({ theme }) => theme.spacing.headerHeight.sm};
	// }
	//
	// ${mediaQueries.up.xl} {
	// 	min-height: ${({ theme }) => theme.spacing.headerHeight.xl};
	// }
`;
