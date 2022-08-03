import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';
import { Container } from 'components/layout/Container.styles';
import { PropsWithChildren } from 'react';
import { useScrollToTop } from 'hooks/useScrollToTop';

export const PageStyles = styled.section`
	height: 100%;
	padding: 1rem;
	${mediaQueries.up.md} {
		padding: 2rem 4rem;
	}
`;

export const Page = ({ children }: PropsWithChildren<{}>) => {
	useScrollToTop();
	return (
		<PageStyles>
			<Container maxWidth="xl">{children}</Container>
		</PageStyles>
	);
};
