import styled from 'styled-components';
import { PageStyles } from 'pages/Share.styles';
import { Container } from 'components/layout/Container.styles';

export const ProductsContainer = styled(PageStyles)`
	${Container} {
		display: flex;
		flex-direction: column;
	}
`;
