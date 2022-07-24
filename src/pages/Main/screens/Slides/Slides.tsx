import Carousel from 'components/Carousel/Carousel';
import { Image } from 'components/layout/Image.styles';
import Knight from 'assets/images/knight.png';
import Rook from 'assets/images/rook.png';
import Pawn from 'assets/images/pawn.png';

import { Typography } from 'components/layout/Typography.styles';
import { TextContent } from 'pages/Share.styles';
import { useLanguage } from 'hooks/useLanguage';
import { SlidesContainer } from 'pages/Main/screens/Slides/Slides.styles';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

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
			<Carousel infinite>
				{images.map(({ src, alt }, i) => (
					<Image key={i} src={src} alt={alt} />
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
