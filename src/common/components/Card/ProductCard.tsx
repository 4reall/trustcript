import {
	CardContainer,
	ContentContainer,
	TextContainer,
} from '@/components/Card/Card.styles';
import { Typography } from '@/layout/Typography.styles';

import { IProduct } from '@/types/Product';
import { cutStr } from '@/utils/helpers/cutStr';
import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';
import Link from '@/components/Link/Link';
import { PathsEnum } from '@/utils/constants/paths';
import Carousel from '@/components/Carousel/Carousel';

interface ProductCardProps {
	onClick?: () => void;
}

const ProductCard = ({
	images,
	title,
	description,
	link,
}: IProduct & ProductCardProps) => {
	const { text } = useLanguage('share');
	return (
		<CardContainer>
			<ContentContainer>
				<Carousel showThumbs={false}>
					{images.map((image, i) => (
						<Image key={i} src={image.src} alt={image.alt} />
					))}
				</Carousel>
				<TextContainer>
					<Typography as="h3" variant="h3" bold>
						{title}
					</Typography>
					<Typography variant="h4">
						{cutStr(description, 200)}
					</Typography>
					<Link href={PathsEnum.Products + '/' + link.path}>
						<Typography variant="h4" underline bold uppercase>
							{text('moreBtn')}
						</Typography>
					</Link>
				</TextContainer>
			</ContentContainer>
		</CardContainer>
	);
};

export default ProductCard;
