import { Path, useController, useFormContext } from 'react-hook-form';
import Switch from '@/common/components/_ui/Switch/Switch';
import { Typography } from '@/common/layout/Typography.styles';
import { CheckboxContainer } from '@/modules/Home/components/ContactsForm/ContactsForm.styles';
import { ErrorMessage } from '@/common/layout/ErrorMessage.styles';
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
