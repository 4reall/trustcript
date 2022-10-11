import styled from '@emotion/styled';
import { mediaQueries } from '@/utils/constants/mediaQueries';

export const HeaderStyles = styled.header`
	position: fixed !important;
	padding: 1rem;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	display: flex;
	align-items: center;
	user-select: none;
	z-index: ${({ theme }) => theme.zIndex.appBar};
	background: ${({ theme }) => theme.palette.mainBg.color};

	&:before {
		position: absolute;
		z-index: -1;
		content: '';
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	${mediaQueries.up.md} {
		height: 7.5rem;
		padding: 2rem;
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

export const ContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const DesktopControls = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
`;

export const MobileControls = styled.div`
	display: flex;
	width: 66.66%;
	justify-content: end;
	align-items: center;
	${mediaQueries.up.sm} {
		justify-content: space-between;
		width: 25%;
	}
`;
