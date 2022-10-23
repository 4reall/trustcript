import { useMemo } from 'react';

import Promo from 'src/modules/Home/components/Promo';
import Tools from 'src/modules/Home/components/Tools/Tools';
import Slides from 'src/modules/Home/components/Slides';
import Benefits from 'src/modules/Home/components/Benefits/Benefits';
import Contacts from 'src/modules/Home/components/Contacts/Contacts';

import useMediaQuery from 'src/common/hooks/breakpoints/useMediaQuery';
import { queries } from 'src/common/utils/constants/mediaQueries';
import { ITypographyData } from 'src/modules/Home/types/TypographyData.type';
import { ILink } from 'src/modules/Home/types/Link';

import Knight from 'public/assets/images/thumbnails/knight.webp';
import Rook from 'public/assets/images/thumbnails/rook.webp';
import Pawn from 'public/assets/images/thumbnails/pawn.webp';
import Mask from 'public/assets/icons/Mask.svg';
import Bug from 'public/assets/icons/Bug.svg';
import Scan from 'public/assets/icons/Scan.svg';
import Geoposition from 'public/assets/icons/contacts/Geoposition.svg';
import Call from 'public/assets/icons/contacts/Call.svg';
import Mail from 'public/assets/icons/contacts/Mail.svg';
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
