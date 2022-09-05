import { ComponentPropsWithRef, forwardRef, useState, FocusEvent } from 'react';
import { CheckboxLabel, CheckboxInput, Circle } from './Checkbox.styles';

export interface CheckboxProps extends ComponentPropsWithRef<'input'> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ type, onFocus, onBlur, checked, ...props }, ref) => {
		const [focus, setFocus] = useState(false);

		const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
			setFocus(true);
			onFocus?.(e);
		};
		const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
			setFocus(false);
			onBlur?.(e);
		};

		return (
			<CheckboxLabel focus={focus} active={checked}>
				<Circle />
				<CheckboxInput
					{...props}
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={ref}
					type="checkbox"
				/>
			</CheckboxLabel>
		);
	}
);

export default Checkbox;
