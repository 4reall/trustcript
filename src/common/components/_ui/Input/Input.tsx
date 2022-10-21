import {
	ChangeEvent,
	ComponentPropsWithRef,
	forwardRef,
	useState,
} from 'react';
import { InputBase } from '@/common/components/_ui/Input/Input.styles';

export interface InputProps extends ComponentPropsWithRef<'input'> {
	textarea?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ textarea, ...props }, ref) => {
		return (
			<InputBase
				ref={ref}
				textarea={textarea}
				as={textarea ? 'textarea' : 'input'}
				{...props}
			/>
		);
	}
);

Input.displayName = 'Input';

export default Input;
