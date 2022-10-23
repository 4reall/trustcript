import {
	CarouselContainer,
	ProductContainer,
	TextContainer,
} from 'src/modules/Product/components/Product/Product.styles';
import { IImage } from 'src/common/types/Image';
import { Typography } from 'src/common/layout/Typography.styles';
import useMediaQuery from 'src/common/hooks/breakpoints/useMediaQuery';
import { queries } from 'src/common/utils/constants/mediaQueries';
import Image from 'next/image';
import Carousel from 'src/common/components/Carousel/Carousel';

interface ProductProps {
	title: string;
	description: string;
	images: IImage[];
}
const Product = ({ title, description, images }: ProductProps) => {
	const isMd = useMediaQuery(queries.up.md);

	const imagesList = images.map((image, i) => (
		<Image key={i} src={image.src} alt={image.alt} />
	));

	return (
		<ProductContainer>
			<CarouselContainer>
				<Carousel
					showThumbs={true}
					renderThumbs={() => imagesList}
					showIndicators={false}
				>
					{imagesList}
				</Carousel>
			</CarouselContainer>
			<TextContainer>
				<Typography as="h2" variant={isMd ? 'h2' : 'h3'}>
					{title}
				</Typography>
				<Typography
					m={['1rem', 0, 0, 0]}
					as="p"
					variant={isMd ? 'h3' : 'h4'}
					bold
				>
					Описание
				</Typography>
				<Typography
					m={['1rem', 0, 0, 0]}
					as="p"
					variant={isMd ? 'h4' : 'h5'}
				>
					{description}
				</Typography>
			</TextContainer>
		</ProductContainer>
	);
};

export default Product;
