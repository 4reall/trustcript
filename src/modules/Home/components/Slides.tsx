import Image from 'next/image';

import Carousel from '@/components/Carousel/Carousel';
import ContentLayout from './ContentLayout/ContentLayout';

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

interface SlidesProps {
	title: string;
	text: string;
	big: boolean;
}

const Slides = ({ title, text, big }: SlidesProps) => {
	return (
		<ContentLayout
			title={title}
			text={text}
			big={big}
			content={
				<Carousel
					showThumbs={false}
					showArrows={true}
					showIndicators={true}
				>
					{images.map((image, i) => (
						<Image key={i} {...image} />
					))}
				</Carousel>
			}
			direction={big ? 'row-reverse' : 'column-reverse'}
		/>
	);
};

export default Slides;
