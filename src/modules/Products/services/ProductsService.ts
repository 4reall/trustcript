import prisma from 'src/lib/prisma';
import { IProduct } from 'src/modules/Products/types/Product';
import { transformToProduct } from 'src/modules/Products/helpers/transformToProduct';
import { IProductsResponse } from 'src/modules/Products/types/ProductsResponse';
import {
	IProductsParams,
	ProductFilters,
} from 'src/modules/Products/types/ProductsParams';

export const getProducts = async ({
	limit = 6,
	page = 1,
	filter,
}: IProductsParams): Promise<IProductsResponse> => {
	try {
		const images = await prisma.imagesOnProducts.findMany({
			include: {
				Image: true,
			},
		});
		const thumbnails = await prisma.thumbnailsOnProducts.findMany({
			include: {
				Image: true,
			},
		});

		const { _count } = await prisma.product.aggregate({
			_count: true,
			where: {
				category: filter === ProductFilters.ALL ? undefined : filter,
			},
		});

		limit = limit < _count ? limit : _count;
		page = page - 1;
		page = page * limit < _count ? page : Math.ceil(_count / limit);
		page = page < 0 ? 0 : page;

		const baseProducts = await prisma.product.findMany({
			where: {
				category: filter === ProductFilters.ALL ? undefined : filter,
			},
			skip: limit * page,
			take: limit,
		});

		const products: IProduct[] = transformToProduct({
			images,
			thumbnails,
			baseProducts,
		});

		return { totalCount: _count, products };
	} catch (e) {
		throw e;
	}
};

// import prisma from '@lib/prisma';
// import { IProduct } from '@modules/Products/types/Product';
// import { transformToProduct } from '@modules/Products/helpers/transformToProduct';
// import { IProductsResponse } from '@modules/Products/types/ProductsResponse';
// import { IProductsParams } from '@modules/Products/types/ProductsParams';

// import prisma from 'src/lib/prisma';
// import { IProduct } from 'src/modules/Products/types/Product';
// import { transformToProduct } from 'src/modules/Products/helpers/transformToProduct';
// import { IProductsResponse } from 'src/modules/Products/types/ProductsResponse';
// import { IProductsParams } from 'src/modules/Products/types/ProductsParams';
