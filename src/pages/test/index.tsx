/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import Image from 'next/image';
import Carousel from '@/components/Carousel/Carousel';
import Knight from '@/assets/images/knight.webp';
import Rook from '@/assets/images/rook.webp';
import Pawn from '@/assets/images/pawn.webp';
import IconButton from '@/components/_ui/IconButton/IconButton';
import ChevronRight from '@/modules/Carousel/assets/chevron-right-solid.svg';
import ChevronLeft from '@/modules/Carousel/assets/chevron-left-solid.svg';
import { css } from '@emotion/react';
import Button from '@/components/_ui/Button/Button';

const images = [
	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },
];

const Index = () => {
	return (
		<div>
			<Button />
		</div>
	);
};

export default Index;
