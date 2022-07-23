import { PropsWithChildren } from 'react';

import {
	ButtonBase,
	DarkBtn,
	IconBtn,
	OutlinedBtn,
} from 'components/ui/Button/Button.styles';
import Ripple from 'components/Ripple/Ripple';

import { ButtonStylesProps } from 'components/ui/Button/Button.styles';

import { useTheme } from 'styled-components';

interface ButtonProps extends PropsWithChildren<ButtonStylesProps> {
	dark?: boolean;
	outlined?: boolean;
	icon?: boolean;
	onClick: () => void;
}

const Button = ({ children, dark, outlined, icon, ...props }: ButtonProps) => {
	const { palette } = useTheme();

	if (dark)
		return (
			<DarkBtn {...props}>
				{children}
				<Ripple duration={1000} color={palette.normal.normal} />
			</DarkBtn>
		);

	if (outlined)
		return (
			<OutlinedBtn {...props}>
				{children}
				<Ripple duration={1000} color={palette.normal.normal} />
			</OutlinedBtn>
		);

	if (icon)
		return (
			<IconBtn {...props}>
				{children}
				<Ripple duration={1000} color={palette.normal.normal} />
			</IconBtn>
		);

	return (
		<ButtonBase {...props}>
			{children}
			<Ripple duration={1000} color={palette.normal.normal} />
		</ButtonBase>
	);
};

export default Button;
