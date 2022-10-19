import Image from 'next/image';
import { ReactNode } from 'react';

import ContentMobile from 'src/modules/Header/components/ContentMobile';
import ContentDesktop from 'src/modules/Header/components/ContentDesktop';
import { Container } from '@/layout/Container.styles';
import { HeaderStyles } from 'src/modules/Header/Header.styles';

import { INavLink } from '@/modules/Header/components/Navigation/Navigation';
import { PathsEnum } from '@/utils/constants/paths';
import { queries } from '@/utils/constants/mediaQueries';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';

import Ru from '@/assets/icons/countries/ru.svg';
import Uk from '@/assets/icons/countries/uk.svg';
import Telegram from '@/assets/icons/networks/telegram.svg';
import Twitter from '@/assets/icons/networks/twitter.svg';
import Youtube from '@/assets/icons/networks/youtube.svg';
import WhatsUp from '@/assets/icons/networks/whatsup.svg';
import { ILanguageOption } from '@/components/LanguageSwitcher/LanguageSwitcher';
import { Locales } from '@/utils/constants/Locales';
import { SocialLink } from 'src/modules/Header/types/SocialLink';

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

const options: ILanguageOption[] = [
	{
		locale: Locales.RU,
		label: 'ru',
		image: { src: Ru, alt: 'ru icon' },
	},
	{
		locale: Locales.EN,
		label: 'en',
		image: { src: Uk, alt: 'uk icon' },
	},
];

export interface ContentProps {
	languageOptions: ILanguageOption[];
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
						languageOptions={options}
						socials={socials}
					/>
				) : (
					<ContentMobile
						navLinks={navLinks}
						languageOptions={options}
						socials={socials}
					/>
				)}
			</Container>
		</HeaderStyles>
	);
};

export default Header;
