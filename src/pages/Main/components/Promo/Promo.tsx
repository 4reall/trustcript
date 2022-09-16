import { Typography } from 'components/_layout/Typography.styles';
import { Img } from 'components/_layout/Img.styles';
import { PromoContainer } from 'pages/Main/components/Promo/Promo.styles';
import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import Button from 'components/_ui/Button/Button';
import { TextContent } from 'pages/Main/components/Share.styles';

import Glass from 'assets/images/thumbnails/glass.webp';
import { useNavigate } from 'react-router-dom';
import { PathsEnum } from 'utils/constants/paths';

const Promo = () => {
	const { text } = useLanguage('promo');
	const isLg = useMediaQuery(queries.up.lg);
	const isMd = useMediaQuery(queries.up.md);
	const navigate = useNavigate();

	const goToProducts = () => {
		navigate(PathsEnum.Products);
	};

	return (
		<PromoContainer>
			<TextContent>
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
				<Button onClick={goToProducts} small={!isMd}>
					{text('button')}
				</Button>
			</TextContent>
			<Img src={Glass} alt={'glass image'} />
		</PromoContainer>
	);
};

export default Promo;
