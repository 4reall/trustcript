import prisma from 'src/lib/prisma';
import { Categories, IProduct } from '@/types/Product';

export const getProducts = async (): Promise<IProduct[]> => {
	try {
		const thumbnails = await prisma.thumbnailsOnProducts.findMany({
			include: {
				Image: true,
			},
		});
		const images = await prisma.thumbnailsOnProducts.findMany({
			include: {
				Image: true,
			},
		});
		const baseProducts = await prisma.product.findMany({});

		return baseProducts.map((product) => {
			const productsThumbnails = thumbnails
				.filter((thumbnail) => thumbnail.productId === product.id)
				.map((thumbnail) => ({
					src: thumbnail.Image.path,
					alt: thumbnail.Image.alt,
				}));

			const productsImages = images
				.filter((image) => image.productId === product.id)
				.map((image) => ({
					src: image.Image.path,
					alt: image.Image.alt,
				}));

			return {
				...product,
				category: product.category as Categories,
				thumbnails: productsThumbnails,
				images: productsImages,
			};
		});
	} catch (e) {
		throw e;
	}
};
