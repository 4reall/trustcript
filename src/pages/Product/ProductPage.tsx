import { useParams } from 'react-router-dom';

import { Page } from 'pages/share/Page.styles';
import { Typography } from 'components/_layout/Typography.styles';
import Product from 'pages/Product/screens/Product/Product';
import Similar from 'pages/Product/screens/Similar/Similar';

import { getProductById, getRandomProducts } from 'utils/mock/products';

import backBig from 'assets/images/notebook/notebook-back-big.png';
import frontBig from 'assets/images/notebook/notebook-front-big.png';
import leftBig from 'assets/images/notebook/notebook-left-big.png';
import rightBig from 'assets/images/notebook/notebook-right-big.png';

const images = [
	{ src: backBig, alt: 'thumbnail' },
	{ src: frontBig, alt: 'thumbnail' },
	{ src: leftBig, alt: 'thumbnail' },
	{ src: rightBig, alt: 'thumbnail' },
];

const ProductPage = () => {
	const { productId } = useParams();

	if (!productId) return <></>;

	const { description, title } = getProductById(productId);

	return (
		<Page>
			<Product title={title} description={description} images={images} />
			<Typography mt="2rem" mb="2rem" variant="h3" bold display="block">
				Похожие продукты
			</Typography>
			<Similar images={images} products={getRandomProducts(4)} />
		</Page>
	);
};

export default ProductPage;
