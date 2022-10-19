import { SimilarContainer } from '@/modules/Product/components/Similar/Similar.styles';

import { IBaseProduct } from '@/types/Product';
import { IImage } from '@/types/Image';

import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';
import BtnCard from '@/components/BtnCard/BtnCard';
import { useRouter } from 'next/router';

interface SimilarProps {
	images: IImage[];
	products: IBaseProduct[];
}

const Similar = ({ products, images }: SimilarProps) => {
	const isMd = useMediaQuery(queries.up.md);
	const { push } = useRouter();

	const handleClick = (id: number) => {
		return () => push(`../${id}`);
	};

	return (
		<SimilarContainer>
			{products.map(({ title, description, id }) => (
				<BtnCard
					key={id}
					image={images[Math.floor(Math.random() * images.length)]}
					title={title}
					description={description}
					buttonText="подробнее"
					onClick={handleClick(id)}
					small={!isMd}
				/>
			))}
		</SimilarContainer>
	);
};

export default Similar;
