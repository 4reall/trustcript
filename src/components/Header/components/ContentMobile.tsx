import { LanguageOption } from 'context/LanguageContext/Language.context';
import { ContentProps, SocialLink } from 'components/Header/Header';
import { Flex } from 'components/layout/Flex.styles';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import { useState } from 'react';
import Burger from 'components/Header/components/Burger/Burger';
import Navigation from 'components/Navigation/Navigation';
import { PathsEnum } from 'utils/constants/paths';
import { Image } from 'components/layout/Image.styles';
import Logo from 'assets/icons/logo/logo.svg';
import { Link } from 'react-router-dom';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

const ContentMobile = ({ options, socials }: ContentProps) => {
	const isXs = useMediaQuery(queries.down.sm);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Flex align="center" justify="space-between">
			<Link to={PathsEnum.Main}>
				<Image w={isXs ? 3 / 4 : 1} src={Logo} alt="logo" />
			</Link>
			<Flex
				w={isXs ? 2 / 3 : 1 / 4}
				align="center"
				justify={isXs ? 'flex-end' : 'space-between'}
			>
				<LanguageSwitcher options={options} />
				<Burger onClick={handleClick} active={isMenuOpen} />
			</Flex>
			<DropdownMenu onClick={handleClick} full active={isMenuOpen}>
				<Navigation isMobile />
			</DropdownMenu>
		</Flex>
	);
};

export default ContentMobile;
