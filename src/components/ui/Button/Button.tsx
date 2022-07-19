import { PropsWithChildren } from 'react';
import { ButtonStyles } from 'components/ui/Button/Button.styles';
import Ripple from 'components/Ripple/Ripple';
import { useTheme } from 'styled-components';

const Button = ({ children, ...props }: PropsWithChildren<ButtonStyles>) => {
	const { palette } = useTheme();
	return (
		<ButtonStyles {...props}>
			{children}
			<Ripple duration={1000} color={palette.normal.normal} />
		</ButtonStyles>
	);
};

export default Button;
