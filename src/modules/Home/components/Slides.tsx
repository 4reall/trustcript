import { useTranslations } from 'next-intl';
import Image from 'next/image';

import ContentLayout from '@/modules/Home/components/ContentLayout/ContentLayout';

import Carousel from '@/common/components/Carousel/Carousel';
import Knight from '@/assets/images/thumbnails/knight.webp';
import Pawn from '@/assets/images/thumbnails/pawn.webp';
import Rook from '@/assets/images/thumbnails/rook.webp';

const images = [
	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },

	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },
];

interface SlidesProps {
	big: boolean;
}

const Slides = ({ big }: SlidesProps) => {
	const t = useTranslations('slides');
	return (
		<ContentLayout
			title={t('title')}
			text={t('text')}
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
