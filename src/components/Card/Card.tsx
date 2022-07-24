import {
	CardContainer,
	ContentContainer,
	TextContainer,
} from 'components/Card/Card.styles';
import Carousel from 'components/Carousel/Carousel';

import Thumbnail from 'assets/images/product_thumbnail.png';
import { Image } from 'components/layout/Image.styles';
import { Typography } from 'components/layout/Typography.styles';

const Card = () => {
	return (
		<CardContainer>
			<ContentContainer>
				<Carousel>
					<Image src={Thumbnail} />
					<Image src={Thumbnail} />
					<Image src={Thumbnail} />
				</Carousel>
				<TextContainer>
					<Typography as="h3" variant="h3" bold>
						Название продукта
					</Typography>
					<Typography variant="h4">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Aut, quasi.
					</Typography>
					<Typography variant="h4">Подробнее</Typography>
				</TextContainer>
			</ContentContainer>
		</CardContainer>
	);
};

export default Card;
