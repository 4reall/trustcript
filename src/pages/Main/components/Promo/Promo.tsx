import { Typography } from 'components/layout/Typography.styles';
import { Image } from 'components/layout/Image.styles';
import Glass from 'assets/images/glass.png';
import {
	PromoContainer,
	PromoText,
} from 'pages/Main/components/Promo/Promo.styles';
import { useContext } from 'react';
import { languageContext } from 'context/LanguageContext/Language.context';
import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import Button from 'components/ui/Button/Button';
import Carousel from 'components/Carousel/Carousel';

const Promo = () => {
	const { text } = useLanguage('promo');
	const isLg = useMediaQuery(queries.up.lg);

	return (
		<PromoContainer>
			<PromoText>
				<Typography as="h2" variant={isLg ? 'h2' : 'h3'} bold>
					{text('title')}
				</Typography>
				<Typography
					mt="1rem"
					mb="1rem"
					as="p"
					variant={isLg ? 'h3' : 'h4'}
				>
					{text('text')}
				</Typography>
				<Button>{text('button')}</Button>
			</PromoText>
			<Image src={Glass} alt={'glass image'} />
		</PromoContainer>
	);
};

export default Promo;
