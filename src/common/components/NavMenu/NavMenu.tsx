import DropdownMenu from '@/common/components/_ui/DropdownMenu/DropdownMenu';
import { ReactNode, useState } from 'react';
import {
	Container,
	List,
	Nav,
	NavItem,
} from '@/common/components/NavMenu/NavMenu.styles';
import NavLink from '@/common/layout/NavLink';
import { INavLink } from '@/common/types/INavLink';

interface NavMenuProps {
	navLinks: INavLink[];
	trigger: (isOpen: boolean, setIsOpen: () => void) => ReactNode;
}

const NavMenu = ({ navLinks, trigger }: NavMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);

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
							<NavItem key={link.href}>
								<NavLink
									className={(isActive) =>
										isActive ? 'active' : ''
									}
									href={link.href}
								>
									{link.title}
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
