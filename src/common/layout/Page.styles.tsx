import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { mediaQueries } from 'src/common/utils/constants/mediaQueries';
import { Container } from 'src/common/layout/Container.styles';
import { useScrollToTop } from 'src/common/hooks/useScrollToTop';

export const PageStyles = styled.main`
	height: 100%;
	padding: 1rem 2rem;
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
