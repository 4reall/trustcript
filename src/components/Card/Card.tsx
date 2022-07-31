import {
	CardContainer,
	ContentContainer,
	TextContainer,
} from 'components/Card/Card.styles';
import Carousel from 'components/Carousel/Carousel';
import { Image } from 'components/layout/Image.styles';
import { Typography } from 'components/layout/Typography.styles';
import { Link } from 'react-router-dom';

import { ICard } from 'types/Card';

interface CardProps {
	onClick?: () => void;
}

const Card = ({
	images,
	title,
	description,
	link,
	onClick,
}: ICard & CardProps) => {
	return (
		<CardContainer onClick={onClick}>
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
