import { Path, useController, useFormContext } from 'react-hook-form';
import Checkbox, { CheckboxProps } from '@/components/_ui/Checkbox/Checkbox';
import { Typography } from '@/layout/Typography.styles';
import { CheckboxContainer } from '@/modules/Contacts/components/ContactsForm/ContactsForm.styles';
import { ErrorMessage } from '@/layout/ErrorMessage.styles';

interface CheckboxFieldProps<TFormValues> extends CheckboxProps {
	name: Path<TFormValues>;
	label: string;
	variant: 'h4' | 'h5';
}

const CheckboxField = <TFormValues,>({
	name,
	label,
	variant,
	...props
}: CheckboxFieldProps<TFormValues>) => {
	const { control } = useFormContext();
	const {
		field,
		fieldState: { error },
	} = useController({ name, control });

	return (
		<>
			<CheckboxContainer>
				<Checkbox checked={field.value} {...field} {...props} />
				<Typography variant={variant}>{label}</Typography>
			</CheckboxContainer>
			<ErrorMessage>{error?.message}</ErrorMessage>
		</>
	);
};

export default CheckboxField;
