import {
	ComponentPropsWithRef,
	forwardRef,
	useState,
	FocusEvent,
	MouseEvent,
} from 'react';
import {
	SwitchRoot,
	SwitchThumb,
} from '@/common/components/_ui/Switch/Switch.styles';
import { SwitchProps } from '@radix-ui/react-switch';

const Switch = forwardRef<HTMLButtonElement, Omit<SwitchProps, 'asChild'>>(
	(props, ref) => {
		return (
			<SwitchRoot {...props} ref={ref}>
				<SwitchThumb />
			</SwitchRoot>
		);
	}
);

Switch.displayName = 'Switch';

export default Switch;
