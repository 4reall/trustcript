import { number, string } from 'yup';
import { ParsedUrlQuery } from 'querystring';

export interface GetProductParams extends ParsedUrlQuery {
	id: string;
}

export const getProduct = async ({ id }: GetProductParams) => {
	try {
		const validatedId = await number()
			.required()
			.test(
				'is valid id',
				'${path} id is unavailable',
				async (id) =>
					!!(await prisma.product.findUnique({
						where: {
							id,
						},
					}))
			)
			.validate(id);

		const product = await prisma.product.findUnique({
			where: {
				id: validatedId,
			},
		});

		return { product };
	} catch (e) {
		console.log(e);
		throw e;
	}
};
