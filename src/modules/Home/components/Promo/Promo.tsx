import { useRouter } from 'next/router';
import Image from 'next/image';

import { Typography } from '@/layout/Typography.styles';
import Button from '@/components/_ui/Button/Button';
import { Container, ImageContainer, TextContainer } from './Promo.styles';

import { useLanguage } from '@/hooks/useLanguage';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';
import { PathsEnum } from '@/utils/constants/paths';

import Glass from '@/assets/images/glass.webp';

const Promo = () => {
	const { text } = useLanguage('promo');
	const isMd = useMediaQuery(queries.up.sm);
	const isLg = useMediaQuery(queries.up.lg);
	const { push } = useRouter();

	const goToProducts = () => {
		push(PathsEnum.Products);
	};

	return (
		<Container>
			<TextContainer>
				<Typography as="h2" variant={isMd ? 'h3' : 'h4'} bold>
					{text('title')}
				</Typography>
				<Typography
					m={['1rem', 0, '1rem', 0]}
					as="p"
					variant={isMd ? 'h4' : 'h5'}
				>
					{text('text')}
				</Typography>
				<Button onClick={goToProducts} small={!isLg}>
					{text('button')}
				</Button>
			</TextContainer>
			<ImageContainer>
				<Image src={Glass} alt={'glass image'} />
			</ImageContainer>
		</Container>
	);
};

export default Promo;
