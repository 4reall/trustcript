import Image from 'next/image';

import Link from '@/layout/Link/Link';
import {
	ContentContainer,
	DesktopControls,
	SocialLinksContainer,
} from 'src/modules/Header/Header.styles';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

import { PathsEnum } from '@/utils/constants/paths';
import { ContentProps } from 'src/modules/Header/Header';

import Logo from '@/assets/icons/logo/logo.svg';
import Navigation from 'src/modules/Header/components/Navigation/Navigation';

const ContentDesktop = ({
	languageOptions,
	socials,
	navLinks,
}: ContentProps) => {
	return (
		<ContentContainer>
			<Link href={PathsEnum.Main}>
				<Image src={Logo} alt="logo" />
			</Link>
			<DesktopControls>
				<Navigation navLinks={navLinks} />
				<LanguageSwitcher languageOptions={languageOptions} />
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
			</DesktopControls>
		</ContentContainer>
	);
};

export default ContentDesktop;
