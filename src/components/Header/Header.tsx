import Twitter from 'assets/icons/networks/twitter.svg';
import Telegram from 'assets/icons/networks/telegram.svg';
import WhatsUp from 'assets/icons/networks/whatsup.svg';
import Youtube from 'assets/icons/networks/youtube.svg';
import { Container } from 'components/layout/Container.styles';
import { HeaderStyles } from 'components/Header/Header.styles';

import Ru from 'assets/icons/countries/ru.svg';
import Uk from 'assets/icons/countries/uk.svg';
import { LanguageOption } from 'context/LanguageContext/Language.context';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import ContentDesktop from 'components/Header/components/ContentDesktop';
import ContentMobile from 'components/Header/components/ContentMobile';
import { LanguagesEnum } from 'utils/constants/languages';
import isMobile from 'is-mobile';

export interface SocialLink {
	href: string;
	alt: string;
	thumbnail: string;
}
const socials: SocialLink[] = [
	{
		href: 'https//google.com',
		alt: 'twitter icon',
		thumbnail: Twitter,
	},
	{
		href: 'https//google.com',
		alt: 'telegram icon',
		thumbnail: Telegram,
	},
	{
		href: 'https//google.com',
		alt: 'youtube icon',
		thumbnail: Youtube,
	},
	{
		href: 'https//google.com',
		alt: 'whats up icon',
		thumbnail: WhatsUp,
	},
];
const options: LanguageOption[] = [
	{ id: 0, language: LanguagesEnum.RU, thumbnail: Ru },
	{ id: 1, language: LanguagesEnum.UK, thumbnail: Uk },
];

export interface ContentProps {
	options: LanguageOption[];
	socials: SocialLink[];
}

const Header = () => {
	const isMd = useMediaQuery(queries.up.md);
	return (
		<HeaderStyles p={isMd ? '2rem' : '1rem'}>
			<Container maxWidth="xl">
				{isMd ? (
					<ContentDesktop options={options} socials={socials} />
				) : (
					<ContentMobile options={options} socials={socials} />
				)}
			</Container>
		</HeaderStyles>
	);
};

export default Header;
