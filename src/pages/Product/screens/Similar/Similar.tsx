import { SimilarContainer } from 'pages/Product/screens/Similar/Similar.styles';

import { IProduct } from 'types/Product';
import { IImage } from 'types/Image';
import { PathsEnum } from 'utils/constants/paths';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import { useNavigate } from 'react-router-dom';
import BtnCard from 'components/cards/BtnCard/BtnCard';

interface SimilarProps {
	images: IImage[];
	products: IProduct[];
}

const Similar = ({ products, images }: SimilarProps) => {
	const isMd = useMediaQuery(queries.up.md);
	const navigate = useNavigate();

	const handleClick = (id: number) => {
		return () => navigate(`${PathsEnum.Products}/${id}`);
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
