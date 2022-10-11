import styled from '@emotion/styled';
import { mediaQueries } from '@/utils/constants/mediaQueries';

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 5rem;
	background: ${({ theme }) => theme.palette.mainBg.color};
	${mediaQueries.up.md} {
		min-height: 6rem;
	}
`;
