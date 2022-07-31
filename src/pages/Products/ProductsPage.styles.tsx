import styled from 'styled-components';
import { Page } from 'pages/Share.styles';
import { Container } from 'components/layout/Container.styles';

export const ProductsContainer = styled(Page)`
	${Container} {
		display: flex;
		flex-direction: column;
	}
`;
