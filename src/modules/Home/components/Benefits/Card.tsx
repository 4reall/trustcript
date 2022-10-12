import Image from 'next/image';

import { Typography } from '@/layout/Typography.styles';
import { CardContainer, ImageContainer } from './Benefits.styles';
import { IImage } from '@/types/Image';

import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';

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
			<Typography m={[isMd ? '1rem' : '0', 0, 0, 0]} variant="h4">
				{text}
			</Typography>
		</CardContainer>
	);
};

export default Card;
