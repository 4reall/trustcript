import { ReactNode } from 'react';

import { Typography } from '@/layout/Typography.styles';

import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';
import { CardContainer, ImageContainer } from './Benefits.styles';
import { IImage } from '@/types/Image';
import Image from 'next/image';

interface CardProps {
	image: IImage;
	text: string;
}

const Card = ({ text, image }: CardProps) => {
	const isMd = useMediaQuery(queries.up.md);
	return (
		<CardContainer>
			<ImageContainer>
				<Image src={image.src} alt={image.alt} />
			</ImageContainer>
			<Typography mt={isMd ? '1rem' : ''} variant="h4">
				{text}
			</Typography>
		</CardContainer>
	);
};

export default Card;
