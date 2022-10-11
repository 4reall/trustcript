import Image from 'next/image';

import { Typography } from '@/layout/Typography.styles';

import { useLanguage } from '@/hooks/useLanguage';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';

import { Container, TextContainer } from './Slides.styles';
import Carousel from '@/components/Carousel/Carousel';
import Knight from '@/assets/images/knight.webp';
import Pawn from '@/assets/images/pawn.webp';
import Rook from '@/assets/images/rook.webp';

const images = [
	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },

	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },
];

const Slides = () => {
	const { text } = useLanguage('slides');
	const isLg = useMediaQuery(queries.up.lg);

	return (
		<Container>
			<Carousel showThumbs={false}>
				{images.map((image, i) => (
					<Image key={i} {...image} />
				))}
			</Carousel>
			<TextContainer>
				<Typography as="h2" variant={isLg ? 'h2' : 'h3'} bold>
					{text('title')}
				</Typography>
				<Typography
					m={['1rem', 0, 0, 0]}
					as="p"
					variant={isLg ? 'h3' : 'h4'}
				>
					{text('text')}
				</Typography>
			</TextContainer>
		</Container>
	);
};

export default Slides;
