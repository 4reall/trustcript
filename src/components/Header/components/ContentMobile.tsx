import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	ContentContainer,
	MobileControls,
} from 'components/Header/Header.styles';
import LanguageSwitcher from 'components/_ui/LanguageSwitcher/LanguageSwitcher';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import Burger from 'components/Header/components/Burger/Burger';
import Navigation from 'components/Navigation/Navigation';

import { ContentProps } from 'components/Header/Header';
import { PathsEnum } from 'utils/constants/paths';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

import { ReactComponent as Logo } from 'assets/icons/logo/logo.svg';

const ContentMobile = ({ options, navLinks }: ContentProps) => {
	const isXs = useMediaQuery(queries.down.sm);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<ContentContainer>
			<Link to={PathsEnum.Main} className="header__link">
				<Logo width={isXs ? '75%' : '100%'} alt="logo" />
			</Link>
			<MobileControls>
				<LanguageSwitcher options={options} />
				<Burger onClick={handleClick} active={isMenuOpen} />
			</MobileControls>
			<DropdownMenu onClick={handleClick} full active={isMenuOpen}>
				<Navigation navLinks={navLinks} isMobile />
			</DropdownMenu>
		</ContentContainer>
	);
};

export default ContentMobile;
