import { NavLink } from 'react-router-dom';

import { Nav, NavItem } from './Navigation.styles';
import { Typography } from '../layout/Typography.styles';

import { NavProps } from './Navigation.styles';
import { PathsEnum } from 'utils/constants/paths';

import { languageData } from 'utils/constants/languageData';
import { useLanguage } from 'hooks/useLanguage';

interface INavLink {
	title: keyof typeof languageData.navigation;
	path: PathsEnum;
}

const navLinks: INavLink[] = [
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
