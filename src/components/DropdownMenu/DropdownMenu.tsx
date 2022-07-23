import { ReactNode } from 'react';

import {
	DropdownMenuStyles,
	DropdownMenuStylesProps,
} from './DropdownMenu.styles';

interface DropdownMenuProps extends DropdownMenuStylesProps {
	children: ReactNode;
	onClick?: () => void;
}

const DropdownMenu = ({ children, ...props }: DropdownMenuProps) => {
	return <DropdownMenuStyles {...props}>{children}</DropdownMenuStyles>;
};

export default DropdownMenu;
