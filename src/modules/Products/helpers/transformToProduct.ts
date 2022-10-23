import {
	ImagesOnProducts,
	ThumbnailsOnProducts,
	ProductBase,
} from 'src/lib/prisma';
import {
	ProductCategories,
	IProduct,
} from 'src/modules/Products/types/Product';

interface TransformToProductProps {
	thumbnails: ThumbnailsOnProducts[];
	images: ImagesOnProducts[];
	baseProducts: ProductBase[];
}

export const transformToProduct = ({
	thumbnails,
	images,
	baseProducts,
}: TransformToProductProps): IProduct[] => {
	return baseProducts.map((product) => {
		const productThumbnails = thumbnails
			.filter((thumbnail) => thumbnail.productId === product.id)
			.map((thumbnail) => ({
				src: thumbnail.Image.path,
				alt: thumbnail.Image.alt,
			}));

		const productImages = images
			.filter((image) => image.productId === product.id)
			.map((image) => ({
				src: image.Image.path,
				alt: image.Image.alt,
			}));

		return {
			...product,
			category: product.category as ProductCategories,
			thumbnails: productThumbnails,
			images: productImages,
		};
	});
};
