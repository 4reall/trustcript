import Carousel from 'components/Carousel/Carousel';
import Controls from 'components/_ui/Controls/Controls';
import { Img } from 'components/_layout/Img.styles';
import { Typography } from 'components/_layout/Typography.styles';
import { TextContent } from 'pages/Main/screens/Share.styles';
import { SlidesContainer } from 'pages/Main/screens/Slides/Slides.styles';

import { CarouselControls } from 'components/Carousel/Carousel';

import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

import Knight from 'assets/images/thumbnails/knight.webp';
import Rook from 'assets/images/thumbnails/rook.webp';
import Pawn from 'assets/images/thumbnails/pawn.webp';

const images = [
	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },
];

const Slides = () => {
	const { text } = useLanguage('slides');
	const isLg = useMediaQuery(queries.up.lg);
	return (
		<SlidesContainer>
			<Carousel
				sideControls
				controls={(props: CarouselControls) => (
					<Controls mt={'1rem'} {...props} />
				)}
			>
				{images.map((image, i) => (
					<Img key={i} {...image} />
				))}
			</Carousel>
			<TextContent>
				<Typography as="h2" variant={isLg ? 'h2' : 'h3'} bold>
					{text('title')}
				</Typography>
				<Typography mt="1rem" as="p" variant={isLg ? 'h3' : 'h4'}>
					{text('text')}
				</Typography>
			</TextContent>
		</SlidesContainer>
	);
};

export default Slides;
