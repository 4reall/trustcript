import prisma from 'src/lib/prisma';
import { IProduct } from 'src/common/types/Product';
import { transformToProduct } from 'src/lib/api/products/helpers/transformToProduct';
import { IProductsResponse } from 'src/lib/api/products/types/ProductsResponse';
import { IProductsParams } from 'src/lib/api/products/types/ProductsParams';
import { ProductFilters } from 'src/lib/api/products/types/ProductFilters';
import { paramsSchema } from 'src/lib/api/products/services/getProducts/params.schema';

export const getProducts = async (
	params: IProductsParams
): Promise<IProductsResponse> => {
	try {
		const validatedParams = await paramsSchema.validate(params);
		let { page, filter, limit } = validatedParams;
		filter = filter === ProductFilters.ALL ? undefined : filter;

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
				category: filter,
			},
		});

		if (!limit) {
			const baseProducts = await prisma.product.findMany({
				where: {
					category: filter,
				},
			});

			const products: IProduct[] = transformToProduct({
				images,
				thumbnails,
				baseProducts,
			});

			return { totalCount: _count, products };
		}

		limit = limit < _count ? limit : _count;
		page = page - 1;
		page = page * limit < _count ? page : Math.ceil(_count / limit);
		page = page < 0 ? 0 : page;

		const baseProducts = await prisma.product.findMany({
			where: {
				category: filter,
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
		console.log(e);
		throw e;
	}
};
