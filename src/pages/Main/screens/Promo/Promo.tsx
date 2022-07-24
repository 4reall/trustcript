import { Typography } from 'components/layout/Typography.styles';
import { Image } from 'components/layout/Image.styles';
import Glass from 'assets/images/glass.png';
import { PromoContainer } from 'pages/Main/screens/Promo/Promo.styles';
import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import Button from 'components/ui/Button/Button';
import { TextContent } from 'pages/Share.styles';

const Promo = () => {
	const { text } = useLanguage('promo');
	const isLg = useMediaQuery(queries.up.lg);
	const isMd = useMediaQuery(queries.up.md);

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
				<Button onClick={() => {}} small={!isMd}>
					{text('button')}
				</Button>
			</TextContent>
			<Image src={Glass} alt={'glass image'} />
		</PromoContainer>
	);
};

export default Promo;
