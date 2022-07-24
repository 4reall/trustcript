import styled from 'styled-components';
import { ScreenContainer } from 'pages/Share.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const ToolsContainer = styled(ScreenContainer)`
	position: relative;
	flex-direction: column !important;
	align-items: center;
	//justify-content: space-between;
	text-align: center;
`;

export const ToolsLogosContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	margin-top: 3rem;
	& img {
		max-width: 23%;
	}
	${mediaQueries.down.md} {
		margin-top: 0;
		flex-direction: column;
		& img {
			display: block;
			margin: 0.5rem auto auto;
			max-width: unset;
			width: 50%;
			&:first-child {
				margin-top: 0;
			}
		}
	}
`;
