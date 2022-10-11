import { Path, useController, useFormContext } from 'react-hook-form';
import Input, { InputProps } from '@/components/_ui/Input/Input';
import { ErrorMessage } from '@/layout/ErrorMessage.styles';

interface InputFieldProps<TFormValues> extends InputProps {
	name: Path<TFormValues>;
}

const InputField = <TFormValues,>({
	name,
	value,
	onChange,
	onFocus,
	onBlur,
	...props
}: InputFieldProps<TFormValues>) => {
	const { control } = useFormContext();
	const {
		field,
		fieldState: { error },
	} = useController({ name, control });

	return (
		<>
			<Input {...field} {...props} />
			<ErrorMessage>{error?.message}</ErrorMessage>
		</>
	);
};

export default InputField;
