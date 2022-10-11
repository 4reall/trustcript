import { Nav, NavItem } from '@/components/Navigation/Navigation.styles';
import { Typography } from '@/layout/Typography.styles';

import { NavProps } from '@/components/Navigation/Navigation.styles';
import { PathsEnum } from '@/utils/constants/paths';

import { languageData } from '@/mock/languageData';
import { useLanguage } from '@/hooks/useLanguage';
import NavLink from '@/components/NavLink/NavLink';

export interface INavLink {
	title: keyof typeof languageData.navigation;
	path: PathsEnum;
}

interface NavigationBaseProps {
	navLinks: INavLink[];
}

type NavigationProps = NavigationBaseProps & NavProps;

const Navigation = ({ navLinks, ...props }: NavigationProps) => {
	const { text } = useLanguage('navigation');

	return (
		<Nav {...props}>
			{navLinks.map(({ title, path }, i) => (
				<NavItem key={i}>
					<NavLink
						href={path}
						className={(isActive) => (isActive ? 'active' : '')}
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
