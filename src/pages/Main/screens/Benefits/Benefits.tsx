import {
	BenefitsContainer,
	CardsContainer,
} from 'pages/Main/screens/Benefits/Benefits.styles';
import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import { Typography } from 'components/_layout/Typography.styles';

import { ReactComponent as Mask } from 'assets/icons/cards/Mask.svg';
import { ReactComponent as Bug } from 'assets/icons/cards/Bug.svg';
import { ReactComponent as Scan } from 'assets/icons/cards/Scan.svg';
import BenefitsCard from 'pages/Main/screens/Benefits/BenefitsCard';
import { useMemo } from 'react';

const Benefits = () => {
	const { text } = useLanguage('benefits');
	const isMd = useMediaQuery(queries.up.md);

	const cards = useMemo(
		() => [
			{ thumbnail: <Mask alt="anonymity image" />, text: text('card1') },
			{ thumbnail: <Bug alt="bug image" />, text: text('card2') },
			{ thumbnail: <Scan alt="scan image" />, text: text('card3') },
		],
		[text]
	);

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
					<BenefitsCard {...card} key={i} />
				))}
			</CardsContainer>
		</BenefitsContainer>
	);
};

export default Benefits;
