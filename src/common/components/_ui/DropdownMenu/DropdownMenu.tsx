import { ReactNode } from 'react';

import {
	DropdownMenuStyles,
	DropdownMenuStylesProps,
} from 'src/common/components/_ui/DropdownMenu/DropdownMenu.styles';

interface DropdownMenuProps extends DropdownMenuStylesProps {
	children: ReactNode;
	onClick?: () => void;
}

const DropdownMenu = ({ children, ...props }: DropdownMenuProps) => {
	return <DropdownMenuStyles {...props}>{children}</DropdownMenuStyles>;
};

export default DropdownMenu;
