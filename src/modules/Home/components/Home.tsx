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

import Knight from '@/assets/images/thumbnails/knight.webp';
import Rook from '@/assets/images/thumbnails/rook.webp';
import Pawn from '@/assets/images/thumbnails/pawn.webp';
import Mask from '@/assets/icons/Mask.svg';
import Bug from '@/assets/icons/Bug.svg';
import Scan from '@/assets/icons/Scan.svg';
import Geoposition from '@/assets/icons/contacts/Geoposition.svg';
import Call from '@/assets/icons/contacts/Call.svg';
import Mail from '@/assets/icons/contacts/Mail.svg';
import { useTranslations } from 'next-intl';

const images = [
	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },

	{ src: Knight, alt: 'knight images' },
	{ src: Rook, alt: 'knight images' },
	{ src: Pawn, alt: 'knight images' },
];

const Home = () => {
	const isMd = useMediaQuery(queries.up.md);

	return (
		<>
			<Promo big={isMd} />
			<Slides big={isMd} />
			<Tools big={isMd} />
			<Benefits big={isMd} />
			<Contacts big={isMd} />
		</>
	);
};

export default Home;
