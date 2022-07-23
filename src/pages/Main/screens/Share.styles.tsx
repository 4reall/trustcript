import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const ScreenContainer = styled.article`
	padding: 2rem;
	display: flex;
	flex-direction: column-reverse;
	${mediaQueries.up.md} {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const TextContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	${mediaQueries.up.md} {
		width: 50%;
	}
`;
