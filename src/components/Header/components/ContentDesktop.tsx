import { Link } from 'react-router-dom';

import { Flex } from 'components/layout/Flex.styles';
import Navigation from 'components/Navigation/Navigation';
import LanguageSwitcher from 'components/ui/LanguageSwitcher/LanguageSwitcher';
import {
	ContentContainer,
	SocialLinksContainer,
} from 'components/Header/Header.styles';

import { PathsEnum } from 'utils/constants/paths';
import { ContentProps } from 'components/Header/Header';

import { ReactComponent as Logo } from 'assets/icons/logo/logo.svg';

const ContentDesktop = ({ options, socials, navLinks }: ContentProps) => {
	return (
		<ContentContainer>
			<Link to={PathsEnum.Main} className="header__link">
				<Logo alt="logo" />
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
							{social.thumbnail}
						</a>
					))}
				</SocialLinksContainer>
			</Flex>
		</ContentContainer>
	);
};

export default ContentDesktop;
