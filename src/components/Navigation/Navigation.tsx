import { Nav, NavItem, NavProps } from './Navigation.styles';
import { PathsEnum } from '../../utils/constants/paths';
import { NavLink } from 'react-router-dom';
import Flex from '../layout/Flex/Flex';
import { TypographyStyles } from '../layout/Typography.styles';
const links = [
	{ title: 'Главная', path: PathsEnum.Main },
	{ title: 'Блог', path: PathsEnum.Blog },
	{ title: 'Продкуты', path: PathsEnum.Products },
];

interface NavigationProps extends NavProps {}

const Navigation = ({ ...props }: NavigationProps) => {
	return (
		<Nav {...props}>
			{links.map(({ title, path }, i) => (
				<NavItem key={i}>
					<TypographyStyles variant="h4">
						<NavLink
							to={path}
							className={({ isActive }) =>
								isActive ? 'active' : ''
							}
						>
							{title}
						</NavLink>
					</TypographyStyles>
				</NavItem>
			))}
		</Nav>
	);
};

export default Navigation;
