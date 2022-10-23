import { Path, useController, useFormContext } from 'react-hook-form';
import Switch from 'src/common/components/_ui/Switch/Switch';
import { Typography } from 'src/common/layout/Typography.styles';
import { CheckboxContainer } from 'src/modules/Home/components/ContactsForm/ContactsForm.styles';
import { ErrorMessage } from 'src/common/layout/ErrorMessage.styles';
import { SwitchProps } from '@radix-ui/react-switch';

interface CheckboxFieldProps<TFormValues> {
	name: Path<TFormValues>;
	label: string;
	variant: 'h4' | 'h5';
}

const CheckboxField = <TFormValues,>({
	name,
	label,
	variant,
}: CheckboxFieldProps<TFormValues>) => {
	const { control } = useFormContext();
	const {
		field: { onChange, value, ...restField },
		fieldState: { error },
	} = useController({ name, control });

	return (
		<>
			<CheckboxContainer>
				<Switch
					checked={value}
					onCheckedChange={onChange}
					{...restField}
				/>
				<Typography variant={variant}>{label}</Typography>
			</CheckboxContainer>
			<ErrorMessage>{error?.message}</ErrorMessage>
		</>
	);
};

export default CheckboxField;
