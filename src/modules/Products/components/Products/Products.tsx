import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

import { Container } from 'src/modules/Products/components/Products/Products.styles';
import { productFilters } from 'src/modules/Products/helpers/productFilters';
import { IProductsResponse } from 'src/lib/api/products/types/ProductsResponse';
import ProductCard from 'src/modules/Products/components/ProductCard/ProductCard';

import Cards from 'src/common/layout/Cards/Cards';
import Pagination from 'src/common/components/Pagination/Pagination';
import { usePagination } from 'src/common/hooks/usePagination';
import { PathsEnum } from 'src/common/utils/constants/paths';
import axiosClient from 'src/lib/axiosClient';
import CardSkeleton from 'src/common/layout/Card/CardSkeleton';
import Filters from 'src/common/components/Filters/Filters';
import { queries } from 'src/common/utils/constants/mediaQueries';
import useMediaQuery from 'src/common/hooks/breakpoints/useMediaQuery';
import { ProductFilters } from 'src/lib/api/products/types/ProductFilters';

const Products = () => {
	const t = useTranslations('products');
	const isSm = useMediaQuery(queries.up.sm);
	const isMd = useMediaQuery(queries.up.md);
	const isLg = useMediaQuery(queries.up.lg);
	const router = useRouter();
	const [filter, setFilter] = useState<ProductFilters>(
		(router.query.category as ProductFilters) || ProductFilters.ALL
	);
	const { page, handlePageChange } = usePagination(
		parseInt(router.query.page as string)
	);
	const [totalCount, setTotalCount] = useState(0);
	const { data, isFetching, isLoading } = useQuery<IProductsResponse>(
		['products', page, filter],
		async () => {
			const response = await axiosClient.get<IProductsResponse>(
				PathsEnum.Products,
				{
					params: {
						page: page,
						filter,
					},
				}
			);
			return response.data;
		},
		{ staleTime: 120 * 1000 }
	);

	useEffect(() => {
		if (data) setTotalCount(data?.totalCount);
	}, [data?.totalCount]);

	useEffect(() => {
		if (filter !== router.query.category) handlePageChange(1);
		router.query.category = filter;
		router.push({ pathname: router.pathname, query: router.query }, '', {
			shallow: true,
		});
	}, [filter]);

	const handleFilterChange = (filter: ProductFilters) => {
		setFilter(filter);
	};
	const loading = isLoading || isFetching;
	const skeletonCard = new Array(6).fill('');

	return (
		<Container>
			<Filters
				activeFilter={filter}
				onFilterChange={handleFilterChange}
				filters={productFilters}
				columns={isMd ? 4 : isSm ? 2 : 1}
				small={!isLg}
				margin={[0, 0, '2rem', 0]}
			/>
			<Cards>
				{!loading && data
					? data.products.map(({ id, ...product }) => (
							<ProductCard
								id={id}
								key={id}
								{...product}
								href={`${router.pathname}/${id}`}
								moreBtnMessage={t('moreBtn')}
							/>
					  ))
					: skeletonCard.map((_, i) => <CardSkeleton key={i} />)}
			</Cards>
			<Pagination
				activePage={page}
				setActivePage={handlePageChange}
				pageDisplayed={4}
				pageCount={Math.ceil(totalCount / 6)}
			/>
		</Container>
	);
};

export default Products;
