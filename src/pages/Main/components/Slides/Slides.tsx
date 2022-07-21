import Carousel from 'components/ui/Carousel/Carousel';
import { Image } from 'components/layout/Image.styles';
import Knight from 'assets/images/knight.png';
import Rook from 'assets/images/rook.png';
import Pawn from 'assets/images/pawn.png';
import { Typography } from 'components/layout/Typography.styles';
import { TextContent } from 'pages/Main/components/Share.styles';
import { useLanguage } from 'hooks/useLanguage';
import {
	SlidesContainer,
	SlideTest,
} from 'pages/Main/components/Slides/Slides.styles';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

const Slides = () => {
	const { text } = useLanguage('slides');
	const isLg = useMediaQuery(queries.up.lg);
	return (
		<SlidesContainer>
			<Carousel infinite>
				{/*<Image src={Knight} />*/}
				{/*<Image src={Rook} />*/}
				{/*<Image src={Pawn} />*/}
				<SlideTest bg="red">1</SlideTest>
				<SlideTest bg="blue">2</SlideTest>
				<SlideTest bg="yellow">3</SlideTest>
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
