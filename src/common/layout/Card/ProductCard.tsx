import {
	CardContainer,
	ContentContainer,
	TextContainer,
} from '@/common/layout/Card/Card.styles';
import { Typography } from '@/common/layout/Typography.styles';

import { IBaseProduct, IProduct } from '@/common/types/Product';
import { cutStr } from '@/common/utils/helpers/cutStr';

import Image from 'next/image';
import Link from '@/common/layout/Link';
import { PathsEnum } from '@/common/utils/constants/paths';
import Carousel from '@/common/components/Carousel/Carousel';

interface ProductCardOwnProps {
	// onClick?: () => void;
}

type ProductCardProps = IProduct;

const ProductCard = ({ images, title, description, id }: ProductCardProps) => {
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
							{/*{text('moreBtn')}*/}
						</Typography>
					</Link>
				</TextContainer>
			</ContentContainer>
		</CardContainer>
	);
};

export default ProductCard;
