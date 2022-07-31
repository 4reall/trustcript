import {
	BenefitsContainer,
	CardsContainer,
} from 'pages/Main/screens/Benefits/Benefits.styles';
import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import { Typography } from 'components/layout/Typography.styles';

import Mask from 'assets/icons/cards/Mask.svg';
import Bug from 'assets/icons/cards/Bug.svg';
import Scan from 'assets/icons/cards/Scan.svg';
import BenefitsCard from 'pages/Main/screens/Benefits/BenefitsCard';
import { LanguageSectionKeys } from 'utils/mock/languageData';

const cards = [
	{ src: Mask, alt: 'anonymity image', text: 'card1' },
	{ src: Bug, alt: 'bug image', text: 'card2' },
	{ src: Scan, alt: 'scan image', text: 'card3' },
];

const Benefits = () => {
	const { text } = useLanguage('benefits');
	const isMd = useMediaQuery(queries.up.md);
	return (
		<BenefitsContainer>
			<Typography variant={isMd ? 'h2' : 'h3'} bold>
				{text('title')}
			</Typography>
			<Typography
				mt={isMd ? '2rem' : '1rem'}
				variant={isMd ? 'h3' : 'h4'}
			>
				{text('text')}
			</Typography>
			<CardsContainer>
				{cards.map((card, i) => (
					<BenefitsCard
						{...card}
						key={i}
						text={text(card.text as LanguageSectionKeys)}
					/>
				))}
			</CardsContainer>
		</BenefitsContainer>
	);
};

export default Benefits;
