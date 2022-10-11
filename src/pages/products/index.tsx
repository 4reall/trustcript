import { Typography } from '@/layout/Typography.styles';
import Products from '@/modules/Products/Products';
import { useLanguage } from '@/hooks/useLanguage';

const ProductsPage = () => {
	const { text } = useLanguage('products');
	return (
		<>
			<Typography as="h2" variant="h2" bold>
				{text('title')}
			</Typography>
			<Typography m={['2rem', 0]} as="p" variant="h4">
				{text('text')}
			</Typography>
			<Products />
		</>
	);
};

export default ProductsPage;
