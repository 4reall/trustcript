import { Typography } from '@/layout/Typography.styles';
import Products from '@/modules/Products/Products';
import { useLanguage } from '@/hooks/useLanguage';
import { GetServerSidePropsContext } from 'next';
import { IProduct } from '@/types/Product';

interface ProductsPageProps {
	products: IProduct[];
}

const ProductsPage = ({ products }: ProductsPageProps) => {
	// const { t } = useTranslation('home');
	return (
		<>
			<Typography as="h2" variant="h2" bold>
				{/*{t('promo.title')}*/}
			</Typography>
			<Typography m={['2rem', 0]} as="p" variant="h4">
				{/*{t('promo.text')}*/}
			</Typography>
			<Products products={products} />
		</>
	);
};

export const getServerSideProps = async ({
	locale,
}: GetServerSidePropsContext) => {
	const products = await fetch(`${process.env.BASE_URL}api/products`);

	const productsJson = await products.json();

	return {
		props: {
			// ...(await serverSideTranslations(locale || 'ru', [
			// 	'common',
			// 	'home',
			// ])),
			products: productsJson,
		},
	};
};

export default ProductsPage;
