import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';
import convertUnits from '../../utils/helpers/convertUnits';

export interface HeaderStylesProps {
	p: string | number;
}

export const HeaderStyles = styled.header<HeaderStylesProps>`
	position: fixed !important;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	display: flex;
	align-items: center;
	padding: ${({ p }) => convertUnits(p)};
	user-select: none;
	z-index: ${({ theme }) => theme.zIndex.appBar};

	&:before {
		position: absolute;
		z-index: -1;
		content: '';
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: ${({ theme }) => theme.palette.mainBg.color};
	}

	${mediaQueries.up.md} {
		min-height: 6rem;
	}
`;

export const SocialLinksContainer = styled.div`
	display: flex;
	padding: 1rem;
	& a {
		margin-right: 0.5rem;
		&:last-child {
			margin-right: 0;
		}
	}
`;
