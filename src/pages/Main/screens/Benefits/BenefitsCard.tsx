import { ReactNode } from 'react';

import {
	CardContainer,
	ImgContainer,
} from 'pages/Main/screens/Benefits/Benefits.styles';
import { Typography } from 'components/layout/Typography.styles';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

interface CardProps {
	thumbnail: ReactNode;
	text: string;
}

const BenefitsCard = ({ text, thumbnail }: CardProps) => {
	const isMd = useMediaQuery(queries.up.md);
	return (
		<CardContainer>
			<ImgContainer>{thumbnail}</ImgContainer>
			<Typography mt={isMd ? '1rem' : ''} variant="h4">
				{text}
			</Typography>
		</CardContainer>
	);
};

export default BenefitsCard;
