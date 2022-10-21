import { Page } from '@/common/layout/Page.styles';
import { Typography } from '@/common/layout/Typography.styles';
import Product from '@/modules/Product/components/Product/Product';
import Similar from '@/modules/Product/components/Similar/Similar';

import backBig from '@/assets/images/notebook/notebook-back-big.png';
import frontBig from '@/assets/images/notebook/notebook-front-big.png';
import leftBig from '@/assets/images/notebook/notebook-left-big.png';
import rightBig from '@/assets/images/notebook/notebook-right-big.png';
import { useRouter } from 'next/router';

const images = [
	{ src: backBig, alt: 'thumbnail' },
	{ src: frontBig, alt: 'thumbnail' },
	{ src: leftBig, alt: 'thumbnail' },
	{ src: rightBig, alt: 'thumbnail' },
];

const ProductPage = () => {
	const { query } = useRouter();

	if (!query.productId) return <></>;

	// const { description, title } = getProductById(query.productId as string);

	return (
		<>
			{/*<Product title={title} description={description} images={images} />*/}
			<Typography
				m={['2rem', 0, '2rem', 0]}
				variant="h3"
				bold
				display="block"
			>
				Похожие продукты
			</Typography>
			{/*<Similar images={images} products={getRandomProducts(4)} />*/}
		</>
	);
};

export default ProductPage;
