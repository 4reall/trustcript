import Carousel from 'components/Carousel/Carousel';
import Controls from 'components/ui/Controls/Controls';
import {
	CardContainer,
	ContentContainer,
	TextContainer,
} from 'components/Card/Card.styles';
import { Img } from 'components/layout/Img.styles';
import { Typography } from 'components/layout/Typography.styles';
import { Link } from 'react-router-dom';

import { CarouselControls } from 'components/Carousel/Carousel';
import { IProduct } from 'types/Product';
import { cutStr } from 'utils/helpers/cutStr';
import { useLanguage } from 'hooks/useLanguage';

interface CardProps {
	onClick?: () => void;
}

const ProductCard = ({
	images,
	title,
	description,
	link,
}: IProduct & CardProps) => {
	const { text } = useLanguage('share');
	return (
		<CardContainer>
			<ContentContainer>
				<Carousel
					sideControls
					controls={(props: CarouselControls) => (
						<Controls mt={'1rem'} {...props} />
					)}
				>
					{images.map((image, i) => (
						<Img key={i} {...image} />
					))}
				</Carousel>
				<TextContainer>
					<Typography as="h3" variant="h3" bold>
						{title}
					</Typography>
					<Typography variant="h4">
						{cutStr(description, 200)}
					</Typography>
					<Link to={link.path}>
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
