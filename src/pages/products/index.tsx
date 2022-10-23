import { Typography } from 'src/common/layout/Typography.styles';
import Products from 'src/modules/Products/components/Products/Products';

import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { IProduct } from 'src/modules/Products/types/Product';
import { getProducts } from 'src/modules/Products/services/ProductsService';
import { IProductsResponse } from 'src/modules/Products/types/ProductsResponse';
import { useTranslations } from 'next-intl';
import { queryClient } from 'src/lib/queryClient';
import { IProductsParams } from 'src/modules/Products/types/ProductsParams';
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

	if (query.page) {
		page = parseInt(Array.isArray(query.page) ? query.page[0] : query.page);
	}
	await queryClient.prefetchQuery(
		['products', page],
		async () => await getProducts({ page })
	);

	return {
		props: {
			messages: (await import(`public/locales/${locale}.json`)).default,
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default ProductsPage;
