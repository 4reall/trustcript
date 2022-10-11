import Image from 'next/image';

import Link from '@/components/Link/Link';
import {
	ContentContainer,
	DesktopControls,
	SocialLinksContainer,
} from '@/components/Header/Header.styles';
import Navigation from '@/components/Navigation/Navigation';
import LanguageSwitcher from '@/components/_ui/LanguageSwitcher/LanguageSwitcher';

import { PathsEnum } from '@/utils/constants/paths';
import { ContentProps } from '@/components/Header/Header';

import Logo from '@/assets/icons/logo/logo.svg';

const ContentDesktop = ({ options, socials, navLinks }: ContentProps) => {
	return (
		<ContentContainer>
			<Link href={PathsEnum.Main}>
				<Image src={Logo} alt="logo" />
			</Link>
			<DesktopControls>
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
			</DesktopControls>
		</ContentContainer>
	);
};

export default ContentDesktop;
