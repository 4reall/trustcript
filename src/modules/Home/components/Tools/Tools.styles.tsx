import styled from '@emotion/styled';
import { mediaQueries } from '@/utils/constants/mediaQueries';
import { ScreenContainer } from '@/layout/ScreenContainer.styles';

export const ToolsContainer = styled(ScreenContainer)`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

export const ToolsLogosContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	margin-top: 3rem;
	& svg {
		margin-left: 0.5rem;
		max-width: 25%;
	}
	${mediaQueries.down.md} {
		margin-top: 0;
		flex-direction: column;
		& svg {
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
