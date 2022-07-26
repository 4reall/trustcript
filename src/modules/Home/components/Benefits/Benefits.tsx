import {
	BenefitsContainer,
	Cards,
} from 'src/modules/Home/components/Benefits/Benefits.styles';
import { Typography } from 'src/common/layout/Typography.styles';
import Card from 'src/modules/Home/components/Benefits/Card';
import { IImage } from 'src/common/types/Image';
import { useMemo } from 'react';
import Mask from 'public/assets/icons/Mask.svg';
import Bug from 'public/assets/icons/Bug.svg';
import Scan from 'public/assets/icons/Scan.svg';
import { useTranslations } from 'next-intl';

interface ICard {
	image: IImage;
	text: string;
}

interface BenefitsProps {
	big?: boolean;
}

const Benefits = ({ big }: BenefitsProps) => {
	const t = useTranslations('benefits');

	const cards: ICard[] = useMemo(
		() => [
			{
				image: { src: Mask, alt: 'anonymity image' },
				text: t('card1'),
			},
			{
				image: { src: Bug, alt: 'bug image' },
				text: t('card2'),
			},
			{
				image: { src: Scan, alt: 'scan image' },
				text: t('card3'),
			},
		],
		[]
	);
	return (
		<BenefitsContainer>
			<Typography variant={big ? 'h2' : 'h3'} bold>
				{t('title')}
			</Typography>
			<Typography
				m={[big ? '2rem' : '1rem', 0, 0, 0]}
				variant={big ? 'h3' : 'h4'}
			>
				{t('text')}
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
