import { getProducts } from 'src/lib/api/getProducts';
import { IProduct } from '@/types/Product';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const products = await getProducts();

		res.status(200).json(products);
	} catch (e) {
		res.status(500).json({ message: 'internal error' });
	}
};

export default handler;
