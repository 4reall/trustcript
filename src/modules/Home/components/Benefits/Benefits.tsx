import {
	BenefitsContainer,
	Cards,
} from '@/modules/Home/components/Benefits/Benefits.styles';
import { Typography } from '@/layout/Typography.styles';
import Card from '@/modules/Home/components/Benefits/Card';
import { IImage } from '@/types/Image';

interface ICard {
	image: IImage;
	text: string;
}

interface BenefitsProps {
	cards: ICard[];
	title: string;
	text: string;
	big?: boolean;
}

const Benefits = ({ cards, text, title, big }: BenefitsProps) => {
	return (
		<BenefitsContainer>
			<Typography variant={big ? 'h2' : 'h3'} bold>
				{title}
			</Typography>
			<Typography
				m={[big ? '2rem' : '1rem', 0, 0, 0]}
				variant={big ? 'h3' : 'h4'}
			>
				{text}
			</Typography>
			<Cards>
				{cards.map((card, i) => (
					<Card {...card} key={i} />
				))}
			</Cards>
		</BenefitsContainer>
	);
};

export default Benefits;
