import { Nav, NavItem, NavProps } from './Navigation.styles';
import { PathsEnum } from '../../utils/constants/paths';
import { NavLink } from 'react-router-dom';
import Flex from '../layout/Flex/Flex';
import { Typography } from '../layout/Typography.styles';
import { useContext } from 'react';
import { languageContext } from 'context/LanguageContext/Language.context';
import { languageData } from 'utils/constants/languageData';
import { useLanguage } from 'hooks/useLanguage';

interface NavLink {
	title: keyof typeof languageData.navigation;
	path: PathsEnum;
}

const navLinks: NavLink[] = [
	{ title: 'home', path: PathsEnum.Main },
	{ title: 'blog', path: PathsEnum.Blog },
	{ title: 'products', path: PathsEnum.Products },
];

interface NavigationProps extends NavProps {}

const Navigation = ({ ...props }: NavigationProps) => {
	const { text } = useLanguage('navigation');
	return (
		<Nav {...props}>
			{navLinks.map(({ title, path }, i) => (
				<NavItem key={i}>
					<NavLink
						to={path}
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						<Typography variant="h4" uppercase>
							{text(title)}
						</Typography>
					</NavLink>
				</NavItem>
			))}
		</Nav>
	);
};

export default Navigation;
