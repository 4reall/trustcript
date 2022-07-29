import { ChangeEvent, useState } from 'react';
import {
	CheckboxLabel,
	CheckboxInput,
	Circle,
	CheckboxContainer,
} from './Checkbox.styles';
import {
	FieldPath,
	FieldValues,
	RegisterOptions,
	useController,
	UseControllerProps,
	UseFormRegister,
} from 'react-hook-form';
import { Typography } from 'components/layout/Typography.styles';

interface CheckboxProps {
	// value: boolean;
	// setValue: () => void;
	register: UseFormRegister<any>;
	options?: RegisterOptions;
	required: boolean;
	label: string;
}

const Checkbox = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: UseControllerProps<TFieldValues, TName>
) => {
	const {
		field,
		fieldState: { error },
	} = useController(props);
	const [focus, setFocus] = useState(false);

	const { onBlur, onChange, value } = field;

	const handleFocus = () => {
		setFocus(true);
	};
	const handleBlur = () => {
		setFocus(true);
		onBlur();
	};

	return (
		// <CheckboxContainer>
		<CheckboxLabel focus={focus} active={value}>
			<Circle />
			<CheckboxInput
				{...field}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={onChange}
				// checked={value}
				type="checkbox"
			/>
		</CheckboxLabel>
		// <Typography mt="0.75rem" variant="error" color="red" as="p">
		// 	{error?.message}
		// </Typography>
		// </CheckboxContainer>
	);
};

export default Checkbox;
