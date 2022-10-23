import { Typography } from 'src/common/layout/Typography.styles';
import Products from 'src/modules/Products/components/Products/Products';

import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { IProduct } from 'src/common/types/Product';
import { getProducts } from 'src/lib/api/products/services/getProducts/getProducts';
import { IProductsResponse } from 'src/lib/api/products/types/ProductsResponse';
import { useTranslations } from 'next-intl';
import { queryClient } from 'src/lib/queryClient';
import { IProductsParams } from 'src/lib/api/products/types/ProductsParams';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import product from 'src/modules/Product/components/Product/Product';

interface ProductsPageProps {
	productsResponse: IProductsResponse;
}

const ProductsPage = () => {
	const t = useTranslations('products');
	return (
		<>
			<Typography as="h2" variant="h2" bold>
				{t('title')}
			</Typography>
			<Typography m={['2rem', 0]} as="p" variant="h4">
				{t('text')}
			</Typography>
			<Products />
		</>
	);
};

export const getServerSideProps = async ({
	locale,
	query,
}: GetServerSidePropsContext) => {
	let page = 1;

	if (query.page) page = parseInt(query.page as string);

	await queryClient.prefetchQuery(
		['products', page],
		async () => await getProducts({ page: (query as IProductsParams).page })
	);

	return {
		props: {
			messages: (await import(`public/locales/${locale}.json`)).default,
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default ProductsPage;
