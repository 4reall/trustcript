import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const Page = styled.section`
	padding: 1rem;
	${mediaQueries.up.md} {
		padding: 2rem 4rem;
	}
`;
