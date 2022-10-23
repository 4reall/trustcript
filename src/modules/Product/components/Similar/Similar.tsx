import { SimilarContainer } from 'src/modules/Product/components/Similar/Similar.styles';

import { IBaseProduct } from 'src/modules/Products/types/Product';
import { IImage } from 'src/common/types/Image';

import useMediaQuery from 'src/common/hooks/breakpoints/useMediaQuery';
import { queries } from 'src/common/utils/constants/mediaQueries';
import BtnCard from 'src/common/layout/BtnCard/BtnCard';
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
