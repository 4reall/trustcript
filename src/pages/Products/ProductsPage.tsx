import { Typography } from 'components/layout/Typography.styles';
import Content from 'pages/share/Content/Content';
import { useLanguage } from 'hooks/useLanguage';
import { Page } from 'pages/share/Page.styles';
import { products } from 'utils/mock/products';
import { productFilters } from 'utils/mock/filters';

import { IProduct } from 'types/Product';

import ProductCard from 'components/cards/Card/ProductCard';

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
			<Content<IProduct>
				cards={products}
				filters={productFilters}
				render={(card) => <ProductCard {...card} />}
				filterType="category"
			/>
		</Page>
	);
};

export default ProductsPage;
