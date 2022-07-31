import styled from 'styled-components';
import { ScreenContainer, TextContent } from 'pages/Main/screens/Share.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const SlidesContainer = styled(ScreenContainer)`
	flex-direction: column;
	
	${TextContent} {
		padding: 0.5rem 0;
		${mediaQueries.up.md} {
			padding:0 0 0 2rem;
		}
	}
	${mediaQueries.up.md} {
		flex-direction: row;
		& > div {
			width: 50%;
		}

`;

export const SlideTest = styled.div<{ bg: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	width: 100%;
	height: 300px;
	background: ${({ bg }) => bg};
`;
