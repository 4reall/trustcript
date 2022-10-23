import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import {
	ButtonBase,
	DarkBtn,
	OutlinedBtn,
} from 'src/common/components/_ui/Button/Button.styles';
import Ripple from 'src/common/components/_ui/Ripple/Ripple';

import { ButtonStylesProps } from 'src/common/components/_ui/Button/Button.styles';
import { useTheme } from '@emotion/react';

interface ButtonOwnProps {
	dark?: boolean;
	outline?: boolean;
	ripple?: boolean;
}

type ButtonProps = ButtonOwnProps &
	Omit<ComponentPropsWithoutRef<'button'>, 'disabled'> &
	ButtonStylesProps;

const Button = ({
	children,
	dark,
	outline,
	ripple = true,
	...props
}: ButtonProps) => {
	const { palette } = useTheme();

	if (dark)
		return (
			<DarkBtn {...props}>
				{children}
				{!props.disabled && ripple && (
					<Ripple duration={1000} color={palette.normal.normal} />
				)}
			</DarkBtn>
		);

	if (outline)
		return (
			<OutlinedBtn {...props}>
				{children}
				{!props.disabled && ripple && (
					<Ripple duration={1000} color={palette.normal.normal} />
				)}
			</OutlinedBtn>
		);

	return (
		<ButtonBase {...props}>
			{children}
			{!props.disabled && ripple && (
				<Ripple duration={1000} color={palette.normal.normal} />
			)}
		</ButtonBase>
	);
};

export default Button;
