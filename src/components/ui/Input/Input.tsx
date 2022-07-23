import { ChangeEvent, InputHTMLAttributes } from 'react';
import { InputStyles } from 'components/ui/Input/Input.styles';

interface InputProps extends InputHTMLAttributes<any> {
	value: string;
	setValue: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	textarea?: boolean;
}

const Input = ({ setValue, textarea, ...props }: InputProps) => {
	if (textarea)
		return (
			<InputStyles
				as="textarea"
				onChange={setValue}
				rows={4}
				textarea={textarea}
				{...props}
			/>
		);

	return <InputStyles onChange={setValue} {...props} />;
};

export default Input;
