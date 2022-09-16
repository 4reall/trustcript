import styled from 'styled-components';
import { PageStyles } from 'components/_layout/Page.styles';
import { Container } from 'components/_layout/Container.styles';

export const ProductsContainer = styled(PageStyles)`
	${Container} {
		display: flex;
		flex-direction: column;
	}
`;
