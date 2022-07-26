import { Link } from 'react-router-dom';

import { Image } from 'components/layout/Image.styles';
import { Flex } from 'components/layout/Flex.styles';
import Navigation, { INavLink } from 'components/Navigation/Navigation';
import LanguageSwitcher from 'components/ui/LanguageSwitcher/LanguageSwitcher';
import { SocialLinksContainer } from 'components/Header/Header.styles';

import { PathsEnum } from 'utils/constants/paths';
import { ContentProps } from 'components/Header/Header';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

import Logo from 'assets/icons/logo/logo.svg';

const ContentDesktop = ({ options, socials, navLinks }: ContentProps) => {
	const isLg = useMediaQuery(queries.up.lg);
	return (
		<Flex align="center" justify="space-between">
			<Link to={PathsEnum.Main}>
				<Image src={Logo} alt="logo" />
			</Link>
			<Flex align="center" justify="flex-end">
				<Navigation navLinks={navLinks} />
				<LanguageSwitcher options={options} />
				<SocialLinksContainer>
					{socials.map((social) => (
						<a
							key={social.alt}
							target="_blank"
							href={social.href}
							rel="noreferrer"
						>
							<Image alt={social.alt} src={social.thumbnail} />
						</a>
					))}
				</SocialLinksContainer>
			</Flex>
		</Flex>
	);
};

export default ContentDesktop;
