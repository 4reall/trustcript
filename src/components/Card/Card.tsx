import {
	CardContainer,
	ContentContainer,
	TextContainer,
} from 'components/Card/Card.styles';
import Carousel from 'components/Carousel/Carousel';

import { Image } from 'components/layout/Image.styles';
import { Typography } from 'components/layout/Typography.styles';
import { Link } from 'react-router-dom';

export interface ICard {
	images: { src: string; alt: string }[];
	title: string;
	description: string;
	link: {
		title: string;
		path: string;
	};
}

const Card = ({ images, title, description, link }: ICard) => {
	return (
		<CardContainer>
			<ContentContainer>
				<Carousel>
					{images.map((image, i) => (
						<Image key={i} {...image} />
					))}
				</Carousel>
				<TextContainer>
					<Typography as="h3" variant="h3" bold>
						{title}
					</Typography>
					<Typography variant="h4">{description}</Typography>
					<Link to={link.path}>
						<Typography variant="h4">{link.title}</Typography>
					</Link>
				</TextContainer>
			</ContentContainer>
		</CardContainer>
	);
};

export default Card;
