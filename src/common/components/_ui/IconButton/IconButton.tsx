import { ComponentPropsWithoutRef } from 'react';
import {
	IconButtonStyles,
	IconButtonStylesProps,
} from 'src/common/components/_ui/IconButton/IconButton.styles';
import Ripple from 'src/common/components/_ui/Ripple/Ripple';
import { useTheme } from '@emotion/react';

type IconButtonProps = ComponentPropsWithoutRef<'button'> &
	IconButtonStylesProps;

const IconButton = ({ children, disabled, ...props }: IconButtonProps) => {
	const theme = useTheme();
	return (
		<IconButtonStyles disabled={disabled} {...props}>
			{children}
			{!disabled && (
				<Ripple duration={1000} color={theme.palette.normal.normal} />
			)}
		</IconButtonStyles>
	);
};

export default IconButton;
