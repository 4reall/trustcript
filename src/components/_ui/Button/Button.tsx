import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import {
	ButtonBase,
	DarkBtn,
	IconBtn,
	OutlinedBtn,
} from 'components/_ui/Button/Button.styles';
import Ripple from 'components/Ripple/Ripple';

import { ButtonStylesProps } from 'components/_ui/Button/Button.styles';

import { useTheme } from 'styled-components';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	dark?: boolean;
	outlined?: boolean;
	icon?: boolean;
}

const Button = ({
	children,
	dark,
	outlined,
	icon,
	...rest
}: PropsWithChildren<ButtonProps & ButtonStylesProps>) => {
	const { palette } = useTheme();
	const { disabled, onClick, ...props } = rest;

	if (dark)
		return (
			<DarkBtn {...props} onClick={disabled ? () => {} : onClick}>
				{children}
				{!disabled && (
					<Ripple duration={1000} color={palette.normal.normal} />
				)}
			</DarkBtn>
		);

	if (outlined)
		return (
			<OutlinedBtn {...props} onClick={disabled ? () => {} : onClick}>
				{children}
				{!disabled && (
					<Ripple duration={1000} color={palette.normal.normal} />
				)}
			</OutlinedBtn>
		);

	if (icon)
		return (
			<IconBtn {...props} onClick={disabled ? () => {} : onClick}>
				{children}
				{!disabled && (
					<Ripple duration={1000} color={palette.normal.normal} />
				)}
			</IconBtn>
		);

	return (
		<ButtonBase {...props} onClick={disabled ? () => {} : onClick}>
			{children}
			{!disabled && (
				<Ripple duration={1000} color={palette.normal.normal} />
			)}
		</ButtonBase>
	);
};

export default Button;
