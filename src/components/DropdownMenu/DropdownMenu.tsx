import { ReactNode } from 'react';
import {
	DropdownMenuStyles,
	DropdownMenuStylesProps,
} from './DropdownMenu.styles';

interface DropdownMenuProps extends DropdownMenuStylesProps {
	children: ReactNode;
}

const DropdownMenu = ({ children, active }: DropdownMenuProps) => {
	return <DropdownMenuStyles active={active}>{children}</DropdownMenuStyles>;
};

export default DropdownMenu;
