import { Typography } from 'components/_layout/Typography.styles';
import { useLanguage } from 'hooks/useLanguage';
import { Page } from 'components/_layout/Page.styles';
import Products from 'pages/Products/component/Products';

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
