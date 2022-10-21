import { SimilarContainer } from '@/modules/Product/components/Similar/Similar.styles';

import { IBaseProduct } from '@/common/types/Product';
import { IImage } from '@/common/types/Image';

import useMediaQuery from '@/common/hooks/breakpoints/useMediaQuery';
import { queries } from '@/common/utils/constants/mediaQueries';
import BtnCard from '@/common/layout/BtnCard/BtnCard';
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
