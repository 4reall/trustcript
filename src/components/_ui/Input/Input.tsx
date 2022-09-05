import {
	ChangeEvent,
	ComponentPropsWithRef,
	forwardRef,
	useState,
} from 'react';
import { InputBase } from 'components/_ui/Input/Input.styles';

export interface InputProps extends ComponentPropsWithRef<'input'> {
	textarea?: boolean;
	errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ textarea, errorMessage, ...props }, ref) => {
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

export default Input;
