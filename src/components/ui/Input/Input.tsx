import { ChangeEvent, InputHTMLAttributes } from 'react';
import { InputBase, InputContainer } from 'components/ui/Input/InputBase';
import {
	FieldError,
	FieldValues,
	PathString,
	RegisterOptions,
	useFormContext,
	UseFormRegister,
} from 'react-hook-form';
import { Typography } from 'components/layout/Typography.styles';
import { ErrorMessage } from 'components/layout/ErrorMessage.styles';

interface InputProps extends InputHTMLAttributes<any> {
	textarea?: boolean;
	register: UseFormRegister<any>;
	options?: RegisterOptions;
	label: PathString;
	error?: FieldError;
}

const Input = ({
	textarea,
	register,
	required,
	label,
	options,
	error,
	...props
}: InputProps) => {
	return (
		<InputContainer>
			<InputBase
				textarea={textarea}
				as={textarea ? 'textarea' : 'input'}
				{...register(label, options)}
				{...props}
			/>
			<ErrorMessage>{error?.message}</ErrorMessage>
			{/*<Typography as="p" mt="0.75rem" variant="error" color="red">*/}
			{/*	{error?.message}*/}
			{/*</Typography>*/}
		</InputContainer>
	);
};

export default Input;
