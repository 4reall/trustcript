import { Typography } from 'src/common/layout/Typography.styles';

import backBig from 'public/assets/images/notebook/notebook-back-big.png';
import frontBig from 'public/assets/images/notebook/notebook-front-big.png';
import leftBig from 'public/assets/images/notebook/notebook-left-big.png';
import rightBig from 'public/assets/images/notebook/notebook-right-big.png';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { IProductsParams } from 'src/lib/api/products/types/ProductsParams';
import {
	getProduct,
	GetProductParams,
} from 'src/lib/api/products/services/getProduct/getProduct';
import { getProducts } from 'src/lib/api/products/services/getProducts/getProducts';

const images = [
	{ src: backBig, alt: 'thumbnail' },
	{ src: frontBig, alt: 'thumbnail' },
	{ src: leftBig, alt: 'thumbnail' },
	{ src: rightBig, alt: 'thumbnail' },
];

const ProductPage = () => {
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

export const getStaticPaths: GetStaticPaths = async ({}) => {
	const data = await getProducts({});

	const paths = data.products.map((product) => ({
		params: { id: String(product.id) } as IProductsParams,
	}));

	console.log(paths);

	return { paths, fallback: true };
};

export const getStaticProps = async ({
	locale,
	params,
}: GetStaticPropsContext) => {
	const { id } = params as GetProductParams;

	const product = await getProduct({ id });

	console.log(product);

	return {
		props: {
			messages: (await import(`public/locales/${locale}.json`)).default,
		},
	};
};

export default ProductPage;
