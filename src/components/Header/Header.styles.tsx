import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';
import convertUnits from '../../utils/helpers/convertUnits';

export interface HeaderStylesProps {
	p: string | number;
}

export const HeaderStyles = styled.header<HeaderStylesProps>`
	max-width: 100%;
	min-height: ${({ theme }) => theme.spacing.headerHeight.xs};
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.palette.mainBg.color};
	backdrop-filter: ${({ theme }) => theme.palette.mainBg.filter};
	padding: ${({ p }) => convertUnits(p)};
	user-select: none;

	// ${mediaQueries.up.sm} {
	// 	min-height: ${({ theme }) => theme.spacing.headerHeight.sm};
	// }
	//
	// ${mediaQueries.up.xl} {
	// 	min-height: ${({ theme }) => theme.spacing.headerHeight.xl};
	// }
`;
