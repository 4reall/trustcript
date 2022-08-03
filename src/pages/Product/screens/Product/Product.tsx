import {
	CarouselContainer,
	ProductContainer,
	TextContainer,
} from 'pages/Product/screens/Product/Product.styles';
import Carousel, { CarouselControls } from 'components/Carousel/Carousel';
import IconControls from 'components/ui/IconControls/IconControls';
import { Img } from 'components/layout/Img.styles';
import { IImage } from 'types/Image';
import { Typography } from 'components/layout/Typography.styles';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

interface ProductProps {
	title: string;
	description: string;
	images: IImage[];
}
const Product = ({ title, description, images }: ProductProps) => {
	const isMd = useMediaQuery(queries.up.md);

	return (
		<ProductContainer>
			<CarouselContainer>
				<Carousel
					box={isMd}
					controls={(props: CarouselControls) => (
						<IconControls arrows={isMd} {...props} icons={images} />
					)}
				>
					{images.map((image) => (
						<Img key={image.src} {...image} />
					))}
				</Carousel>
			</CarouselContainer>
			<TextContainer>
				<Typography as="h2" variant={isMd ? 'h2' : 'h3'}>
					{title}
				</Typography>
				<Typography mt="1rem" as="p" variant={isMd ? 'h3' : 'h4'} bold>
					Описание
				</Typography>
				<Typography mt="1rem" as="p" variant={isMd ? 'h4' : 'h5'}>
					{description}
				</Typography>
			</TextContainer>
		</ProductContainer>
	);
};

export default Product;
