import {
	CardContainer,
	ContentContainer,
	TextContainer,
} from '@/components/Card/Card.styles';
import { Typography } from '@/layout/Typography.styles';

import { IBaseProduct, IProduct } from '@/types/Product';
import { cutStr } from '@/utils/helpers/cutStr';
import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';
import Link from '@/layout/Link/Link';
import { PathsEnum } from '@/utils/constants/paths';
import Carousel from '@/components/Carousel/Carousel';

interface ProductCardOwnProps {
	// onClick?: () => void;
}

type ProductCardProps = IProduct;

const ProductCard = ({ images, title, description, id }: ProductCardProps) => {
	const { text } = useLanguage('share');
	return (
		<CardContainer>
			<ContentContainer>
				<Carousel showThumbs={false}>
					{images.map((image, i) => (
						<Image
							key={i}
							src={image.src}
							alt={image.alt}
							height={300}
							width={400}
						/>
					))}
				</Carousel>
				<TextContainer>
					<Typography as="h3" variant="h3" bold>
						{title}
					</Typography>
					<Typography variant="h4">
						{cutStr(description, 200)}
					</Typography>
					<Link href={PathsEnum.Products + '/' + id}>
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
