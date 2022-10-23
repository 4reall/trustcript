import {
	CardContainer,
	ContentContainer,
	TextContainer,
} from 'src/common/layout/Card/Card.styles';
import Carousel from 'src/common/components/Carousel/Carousel';
import Image from 'next/image';
import { Typography } from 'src/common/layout/Typography.styles';
import { cutStr } from 'src/common/utils/helpers/cutStr';
import Link from 'src/common/layout/Link';
import { PathsEnum } from 'src/common/utils/constants/paths';
import { ReactNode } from 'react';

interface CardProps {
	mainContent: ReactNode;
	title: string;
	description: string;
	textContent?: ReactNode;
}

const Card = ({ mainContent, textContent, description, title }: CardProps) => {
	return (
		<CardContainer>
			<ContentContainer>
				{mainContent}
				<TextContainer>
					<Typography as="h3" variant="h3" bold>
						{title}
					</Typography>
					<Typography variant="h4">
						{cutStr(description, 200)}
					</Typography>
					{textContent}
				</TextContainer>
			</ContentContainer>
		</CardContainer>
	);
};

export default Card;
