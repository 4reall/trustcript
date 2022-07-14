import styled from 'styled-components';
import { mediaQueries } from '../../utils/constants/mediaQueries';

export const HeaderStyles = styled.header`
	max-width: 100%;
	min-height: ${({ theme }) => theme.spacing.headerHeight.xs};
	padding: 1.25rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.palette.mainBg.color};
	backdrop-filter: ${({ theme }) => theme.palette.mainBg.filter};

	${mediaQueries.up.sm} {
		min-height: ${({ theme }) => theme.spacing.headerHeight.sm};
	}

	${mediaQueries.up.xl} {
		min-height: ${({ theme }) => theme.spacing.headerHeight.xl};
	}
`;
