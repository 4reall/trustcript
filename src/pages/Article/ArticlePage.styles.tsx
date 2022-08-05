import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const ArticlePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	${mediaQueries.up.md} {
		justify-content: space-between;
		flex-direction: row;
	}
`;
