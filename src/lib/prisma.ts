import { Prisma, PrismaClient } from '@prisma/client';
import { ProductCategories } from 'src/common/types/Product';

declare global {
	var prisma: PrismaClient; // This must be a `var` and not a `let / const`
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	prisma = global.prisma;
}

type ImagesOnProducts = Prisma.ImagesOnProductsGetPayload<{
	include: {
		Image: true;
	};
}>;
type ThumbnailsOnProducts = Prisma.ThumbnailsOnProductsGetPayload<{
	include: {
		Image: true;
	};
}>;
type Image = Prisma.ImageGetPayload<{}>;
type ProductBase = Prisma.ProductGetPayload<{}>;

export type { ImagesOnProducts, Image, ProductBase, ThumbnailsOnProducts };

export default prisma;
