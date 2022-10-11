import Image from 'next/image';
import { ReactNode } from 'react';

import ContentMobile from '@/components/Header/components/ContentMobile';
import ContentDesktop from '@/components/Header/components/ContentDesktop';
import { Container } from '@/layout/Container.styles';
import { HeaderStyles } from '@/components/Header/Header.styles';

import { LanguagesEnum } from '@/mock/languageData';
import { LanguageOption } from '@/context/LanguageContext/Language.context';
import { INavLink } from '@/components/Navigation/Navigation';
import { PathsEnum } from '@/utils/constants/paths';
import { queries } from '@/utils/constants/mediaQueries';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';

import Ru from '@/assets/icons/countries/ru.svg';
import Uk from '@/assets/icons/countries/uk.svg';
import Telegram from '@/assets/icons/networks/telegram.svg';
import Twitter from '@/assets/icons/networks/twitter.svg';
import Youtube from '@/assets/icons/networks/youtube.svg';
import WhatsUp from '@/assets/icons/networks/whatsup.svg';

export interface SocialLink {
	href: string;
	alt: string;
	thumbnail: ReactNode;
}
const socials: SocialLink[] = [
	{
		href: 'https//google.com',
		alt: 'twitter icon',
		thumbnail: <Image src={Twitter} alt={'twitter icon'} />,
	},
	{
		href: 'https//google.com',
		alt: 'telegram icon',
		thumbnail: <Image src={Telegram} alt={'telegram icon'} />,
	},
	{
		href: 'https//google.com',
		alt: 'youtube icon',
		thumbnail: <Image src={Youtube} alt={'youtube icon'} />,
	},
	{
		href: 'https//google.com',
		alt: 'whats up icon',
		thumbnail: <Image src={WhatsUp} alt={'whats up icon'} />,
	},
];

const navLinks: INavLink[] = [
	{ title: 'home', path: PathsEnum.Main },
	{ title: 'blog', path: PathsEnum.Blog },
	{ title: 'products', path: PathsEnum.Products },
];

const options: LanguageOption[] = [
	{
		id: 0,
		language: LanguagesEnum.RU,
		thumbnail: <Image src={Ru} alt={'ru icon'} />,
	},
	{
		id: 1,
		language: LanguagesEnum.UK,
		thumbnail: <Image src={Uk} alt={'ru icon'} />,
	},
];

export interface ContentProps {
	options: LanguageOption[];
	socials: SocialLink[];
	navLinks: INavLink[];
}
const Header = () => {
	const isMd = useMediaQuery(queries.up.md);
	return (
		<HeaderStyles>
			<Container maxWidth="xl">
				{isMd ? (
					<ContentDesktop
						navLinks={navLinks}
						options={options}
						socials={socials}
					/>
				) : (
					<ContentMobile
						navLinks={navLinks}
						options={options}
						socials={socials}
					/>
				)}
			</Container>
		</HeaderStyles>
	);
};

export default Header;
