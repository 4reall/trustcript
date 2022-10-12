import { useMemo } from 'react';

import Promo from '@/modules/Home/components/Promo';
import Tools from '@/modules/Home/components/Tools/Tools';
import Slides from '@/modules/Home/components/Slides';
import Benefits from '@/modules/Home/components/Benefits/Benefits';
import Contacts from '@/modules/Home/components/Contacts/Contacts';

import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';
import { ITypographyData } from '@/modules/Home/types/TypographyData.type';
import { ILink } from '@/modules/Home/types/Link';

import Knight from '@/assets/images/knight.webp';
import Rook from '@/assets/images/rook.webp';
import Pawn from '@/assets/images/pawn.webp';
import Mask from '@/assets/icons/Mask.svg';
import Bug from '@/assets/icons/Bug.svg';
import Scan from '@/assets/icons/Scan.svg';
import Geoposition from '@/assets/icons/contacts/Geoposition.svg';
import Call from '@/assets/icons/contacts/Call.svg';
import Mail from '@/assets/icons/contacts/Mail.svg';

const images = [
	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },

	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },
];

interface HomeProps {
	typography: ITypographyData;
}

const Home = ({ typography }: HomeProps) => {
	const isMd = useMediaQuery(queries.up.md);
	const isLg = useMediaQuery(queries.up.lg);
	const { benefits, form, promo, slides, tools, contacts } = typography;

	const cards = useMemo(
		() => [
			{
				image: { src: Mask, alt: 'anonymity image' },
				text: benefits.card1,
			},
			{
				image: { src: Bug, alt: 'bug image' },
				text: benefits.card2,
			},
			{
				image: { src: Scan, alt: 'scan image' },
				text: benefits.card3,
			},
		],
		[]
	);

	const links: ILink[] = useMemo(
		() => [
			{
				href: 'https://yandex.ru/maps/213/moscow/house/leningradskiy_prospekt_27s2/Z04YcwFlT00BQFtvfXt5cnVgbQ==/?from=api-maps&ll=37.565686%2C55.783939&origin=jsapi_2_1_79&z=16.82',
				src: Geoposition,
				text: contacts.address,
			},
			{ href: 'tel:+74950000000', src: Call, text: contacts.tel },
			{
				href: 'mailto:admin@trustcrypt.com',
				src: Mail,
				text: contacts.email,
			},
		],
		[]
	);

	return (
		<>
			<Promo
				title={promo.title}
				text={promo.text}
				buttonText={promo.button}
				big={isMd}
			/>
			<Slides title={slides.title} text={slides.text} big={isMd} />
			<Tools text={tools.text} title={tools.title} big={isMd} />
			<Benefits
				big={isMd}
				cards={cards}
				text={benefits.text}
				title={benefits.title}
			/>
			<Contacts title={contacts.title} links={links} big={isMd} />
		</>
	);
};

export default Home;
