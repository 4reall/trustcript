import { Typography } from 'components/layout/Typography.styles';
import Products from 'pages/Products/screens/Products/Products';
import { useLanguage } from 'hooks/useLanguage';
import { Page } from 'pages/Share.styles';

const ProductsPage = () => {
	const { text } = useLanguage('products');
	return (
		<Page>
			<Typography as="h2" variant="h2" bold>
				{text('title')}
			</Typography>
			<Typography mt="2rem" mb="2rem" as="p" variant="h4">
				{text('text')}
			</Typography>
			<Products />
		</Page>
	);
};

export default ProductsPage;
