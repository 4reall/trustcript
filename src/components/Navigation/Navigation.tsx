import { Nav, NavItem, NavProps } from './Navigation.styles';
import { PathsEnum } from '../../utils/constants/paths';
import { NavLink } from 'react-router-dom';
import Flex from '../layout/Flex/Flex';
import useBreakpointValues from '../../hooks/breakpoints/useBreakpointValues';

const links = [
	{ title: 'Главная', path: PathsEnum.Main },
	{ title: 'Блог', path: PathsEnum.Blog },
	{ title: 'Продкуты', path: PathsEnum.Products },
];

interface NavigationProps extends NavProps {}

const Navigation = ({ ...props }: NavigationProps) => {
	return (
		<Nav {...props}>
			<Flex>
				{links.map(({ title, path }, i) => (
					<NavItem key={i}>
						<NavLink
							to={path}
							className={({ isActive }) =>
								isActive ? 'active' : ''
							}
						>
							{title}
						</NavLink>
					</NavItem>
				))}
			</Flex>
		</Nav>
	);
};

export default Navigation;
