import {
	CardContainer,
	ImgContainer,
} from 'pages/Main/screens/Benefits/Benefits.styles';
import { Image } from 'components/layout/Image.styles';
import { Typography } from 'components/layout/Typography.styles';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

interface CardProps {
	src: string;
	alt: string;
	text: string;
}

const BenefitsCard = ({ text, ...props }: CardProps) => {
	const isMd = useMediaQuery(queries.up.md);
	return (
		<CardContainer>
			<ImgContainer>
				<Image {...props} />
			</ImgContainer>
			<Typography mt={isMd ? '1rem' : ''} variant="h4">
				{text}
			</Typography>
		</CardContainer>
	);
};

export default BenefitsCard;
