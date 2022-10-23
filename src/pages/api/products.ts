import { getProducts } from 'src/lib/api/products/services/getProducts/getProducts';
import { NextApiRequest, NextApiResponse } from 'next';
import { IProductsParams } from 'src/lib/api/products/types/ProductsParams';

interface Request extends NextApiRequest {
	params: IProductsParams;
}

const handler = async (req: Request, res: NextApiResponse) => {
	try {
		const products = await getProducts({ ...req.query });

		res.status(200).json(products);
	} catch (e) {
		res.status(500).json({ message: 'internal error' });
	}
};

export default handler;
