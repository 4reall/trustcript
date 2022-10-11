import styled from '@emotion/styled';

import { mediaQueries } from '@/utils/constants/mediaQueries';
import { ScreenContainer } from '@/layout/ScreenContainer.styles';

export const Container = styled(ScreenContainer)`
	display: flex;
	flex-direction: column;
	& > *:first-child {
		width: 100%;
	}
	
	${mediaQueries.up.sm} {
		flex-direction: row;
		& > *:first-child {
			width: 50%;
		}

`;

export const TextContainer = styled.div`
	width: 100%;
	margin-top: 1rem;
	${mediaQueries.up.sm} {
		width: 50%;
		padding-left: 1rem;
		margin: 0;
	}
`;
