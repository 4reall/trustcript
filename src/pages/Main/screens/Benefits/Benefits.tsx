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
import Card from 'pages/Main/screens/Benefits/Card';
import { LanguageSectionKeys } from 'utils/constants/languageData';

const cards = [
	{ src: Mask, alt: 'anonymity image' },
	{ src: Bug, alt: 'bug image' },
	{ src: Scan, alt: 'scan image' },
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
					<Card
						{...card}
						key={i}
						text={text(`card${i + 1}` as LanguageSectionKeys)}
					/>
				))}
			</CardsContainer>
		</BenefitsContainer>
	);
};

export default Benefits;
