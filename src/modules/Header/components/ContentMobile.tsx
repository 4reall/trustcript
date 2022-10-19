import Image from 'next/image';
import { useState } from 'react';

import {
	ContentContainer,
	MobileControls,
} from 'src/modules/Header/Header.styles';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu';
import Burger from 'src/modules/Header/components/Burger/Burger';
import Link from '@/layout/Link/Link';
import Navigation from '@/components/Navigation/Navigation';

import { ContentProps } from 'src/modules/Header/Header';
import { PathsEnum } from '@/utils/constants/paths';

import Logo from '@/assets/icons/logo/logo.svg';

const ContentMobile = ({ languageOptions, navLinks }: ContentProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<ContentContainer>
			<Link href={PathsEnum.Main}>
				<Image src={Logo} alt="logo" />
			</Link>
			<MobileControls>
				<LanguageSwitcher languageOptions={languageOptions} />
				<Burger onClick={handleClick} active={isMenuOpen} />
			</MobileControls>
			<DropdownMenu onClick={handleClick} full active={isMenuOpen}>
				<Navigation navLinks={navLinks} isMobile />
			</DropdownMenu>
		</ContentContainer>
	);
};

export default ContentMobile;
