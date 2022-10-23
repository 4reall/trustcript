import { getProducts } from 'src/modules/Products/services/ProductsService';
import { NextApiRequest, NextApiResponse } from 'next';
import { IProductsParams } from 'src/modules/Products/types/ProductsParams';

interface Request extends NextApiRequest {
	params: IProductsParams;
}

const handler = async (req: Request, res: NextApiResponse) => {
	try {
		console.log(req.query);
		const products = await getProducts({ ...req.query });

		res.status(200).json(products);
	} catch (e) {
		res.status(500).json({ message: 'internal error' });
	}
};

export default handler;
