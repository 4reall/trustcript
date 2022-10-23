import Carousel from 'src/common/components/Carousel/Carousel';
import Image from 'next/image';
import Link from 'src/common/layout/Link';
import { Typography } from 'src/common/layout/Typography.styles';
import Card from 'src/common/layout/Card/Card';
import { IProduct } from 'src/modules/Products/types/Product';
import { useRouter } from 'next/router';

interface ProductCardOwnProps {
	href: string;
	moreBtnMessage: string;
}

type ProductCardProps = ProductCardOwnProps & IProduct;

const ProductCard = ({
	images,
	title,
	description,
	id,
	href,
	moreBtnMessage,
}: ProductCardProps) => {
	const router = useRouter();
	return (
		<Card
			key={id}
			mainContent={
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
			}
			title={title}
			description={description}
			textContent={
				<Link href={href}>
					<Typography variant="h4" underline bold uppercase>
						{moreBtnMessage}
					</Typography>
				</Link>
			}
		/>
	);
};

export default ProductCard;
