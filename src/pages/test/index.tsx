/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import Image from 'next/image';
import Carousel from '@/components/Carousel/Carousel';
import Knight from '@/assets/images/thumbnails/knight.webp';
import Rook from '@/assets/images/thumbnails/rook.webp';
import Pawn from '@/assets/images/thumbnails/pawn.webp';
import IconButton from '@/components/_ui/IconButton/IconButton';
import ChevronRight from '@/modules/Carousel/assets/chevron-right-solid.svg';
import ChevronLeft from '@/modules/Carousel/assets/chevron-left-solid.svg';
import { css } from '@emotion/react';
import Button from '@/components/_ui/Button/Button';
import ShareButton, {
	IIconLink,
} from '@/components/_ui/ShareButton/ShareButton';

const images = [
	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },
];

const links: IIconLink[] = [
	{
		href: `https://www.facebook.com/sharer/sharer.php?u=1`,
		icon: '/assets/icons/shareBtn/Tw.svg',
	},
	{
		href: `https://twitter.com/intent/tweet?url=1&text=`,
		icon: '/assets/icons/shareBtn/Tw.svg',
	},
];

const Index = () => {
	return (
		<div>
			<ShareButton links={links} />
			<Carousel>
				{images.map((image, i) => (
					<Image key={i} {...image} />
				))}
			</Carousel>
		</div>
	);
};

export default Index;
