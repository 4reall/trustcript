import Image from 'next/image';
import { useMemo } from 'react';

import {
	BenefitsContainer,
	Cards,
} from '@/modules/Home/components/Benefits/Benefits.styles';
import { Typography } from '@/layout/Typography.styles';
import Card from '@/modules/Home/components/Benefits/Card';

import { useLanguage } from '@/hooks/useLanguage';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';

import Mask from '@/assets/icons/Mask.svg';
import Bug from '@/assets/icons/Bug.svg';
import Scan from '@/assets/icons/Scan.svg';

const Benefits = () => {
	const { text } = useLanguage('benefits');
	const isLg = useMediaQuery(queries.up.lg);

	const cards = useMemo(
		() => [
			{
				image: { src: Mask, alt: 'anonymity image' },
				text: text('card1'),
			},
			{
				image: { src: Bug, alt: 'bug image' },
				text: text('card2'),
			},
			{
				image: { src: Scan, alt: 'scan image' },
				text: text('card3'),
			},
		],
		[text]
	);

	return (
		<BenefitsContainer>
			<Typography variant={isLg ? 'h2' : 'h3'} bold>
				{text('title')}
			</Typography>
			<Typography
				mt={isLg ? '2rem' : '1rem'}
				variant={isLg ? 'h3' : 'h4'}
			>
				{text('text')}
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
