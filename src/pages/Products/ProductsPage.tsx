import { Container } from 'components/layout/Container.styles';
import Tabs from 'components/Tabs/Tabs';
import Filters, { IFilter } from 'components/Filters/Filters';
import { ProductsContainer } from 'pages/Products/ProductsPage.styles';
import { Typography } from 'components/layout/Typography.styles';
import Pagination from 'components/ui/Pagination/Pagination';
import Content from 'pages/Products/screens/Content/Content';
import { useLanguage } from 'hooks/useLanguage';

const ProductsPage = () => {
	const { text } = useLanguage('products');
	return (
		<ProductsContainer>
			<Container maxWidth="xl">
				<Typography as="h2" variant="h2" bold>
					{text('title')}
				</Typography>
				<Typography mt="2rem" mb="2rem" as="p" variant="h4">
					{text('text')}
				</Typography>
				<Content />
			</Container>
		</ProductsContainer>
	);
};

export default ProductsPage;
