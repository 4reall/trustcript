import { Container } from 'components/_layout/Container.styles';
import { HeaderStyles } from 'components/Header/Header.styles';
import { LanguageOption } from 'context/LanguageContext/Language.context';
import ContentMobile from 'components/Header/components/ContentMobile';
import ContentDesktop from 'components/Header/components/ContentDesktop';
import { LanguagesEnum } from 'utils/mock/languageData';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

import { ReactComponent as Ru } from 'assets/icons/countries/ru.svg';
import { ReactComponent as Uk } from 'assets/icons/countries/uk.svg';
import { ReactComponent as Telegram } from 'assets/icons/networks/telegram.svg';
import { ReactComponent as Twitter } from 'assets/icons/networks/twitter.svg';
import { ReactComponent as WhatsUp } from 'assets/icons/networks/whatsup.svg';
import { ReactComponent as Youtube } from 'assets/icons/networks/youtube.svg';
import { INavLink } from 'components/Navigation/Navigation';
import { PathsEnum } from 'utils/constants/paths';
import { ReactNode } from 'react';

export interface SocialLink {
	href: string;
	alt: string;
	thumbnail: ReactNode;
}
const socials: SocialLink[] = [
	{
		href: 'https//google.com',
		alt: 'twitter icon',
		thumbnail: <Twitter alt={'twitter icon'} />,
	},
	{
		href: 'https//google.com',
		alt: 'telegram icon',
		thumbnail: <Telegram alt={'telegram icon'} />,
	},
	{
		href: 'https//google.com',
		alt: 'youtube icon',
		thumbnail: <Youtube alt={'youtube icon'} />,
	},
	{
		href: 'https//google.com',
		alt: 'whats up icon',
		thumbnail: <WhatsUp alt={'whats up icon'} />,
	},
];

const navLinks: INavLink[] = [
	{ title: 'home', path: PathsEnum.Main },
	{ title: 'blog', path: PathsEnum.Blog },
	{ title: 'products', path: PathsEnum.Products },
];

const options: LanguageOption[] = [
	{ id: 0, language: LanguagesEnum.RU, thumbnail: <Ru alt={'ru icon'} /> },
	{ id: 1, language: LanguagesEnum.UK, thumbnail: <Uk alt={'ru icon'} /> },
];

export interface ContentProps {
	options: LanguageOption[];
	socials: SocialLink[];
	navLinks: INavLink[];
}

const Header = () => {
	const isMd = useMediaQuery(queries.up.md);
	return (
		<HeaderStyles p={isMd ? '2rem' : '1rem'}>
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
