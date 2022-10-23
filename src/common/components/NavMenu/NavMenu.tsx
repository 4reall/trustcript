import DropdownMenu from 'src/common/components/_ui/DropdownMenu/DropdownMenu';
import { ReactNode, useState } from 'react';
import {
	List,
	Nav,
	NavItem,
} from 'src/common/components/NavMenu/NavMenu.styles';
import NavLink from 'src/common/layout/NavLink';
import { INavLink } from 'src/common/types/INavLink';
import { Typography } from 'src/common/layout/Typography.styles';
import { useRouter } from 'next/router';

interface NavMenuProps {
	navLinks: INavLink[];
	trigger: (isOpen: boolean, setIsOpen: () => void) => ReactNode;
}

const NavMenu = ({ navLinks, trigger }: NavMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const handleTriggerClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{trigger(isOpen, handleTriggerClick)}
			<DropdownMenu active={isOpen}>
				<Nav>
					<List>
						{navLinks.map((link) => (
							<NavItem
								active={router.pathname === link.href}
								key={link.href}
							>
								<NavLink
									className={(isActive) =>
										isActive ? 'active' : ''
									}
									href={link.href}
								>
									<Typography variant="h4">
										{link.title}
									</Typography>
								</NavLink>
							</NavItem>
						))}
					</List>
				</Nav>
			</DropdownMenu>
		</>
	);
};

export default NavMenu;
