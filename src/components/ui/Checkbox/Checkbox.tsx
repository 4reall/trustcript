import { useState } from 'react';
import { CheckboxLabel, CheckboxInput, Circle } from './Checkbox.styles';

interface CheckboxProps {
	value: boolean;
	setValue: () => void;
}

const Checkbox = ({ value, setValue }: CheckboxProps) => {
	const [focus, setFocus] = useState(false);
	return (
		<CheckboxLabel focus={focus} active={value}>
			<Circle />
			<CheckboxInput
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onChange={setValue}
				checked={value}
				type="checkbox"
			/>
		</CheckboxLabel>
	);
};

export default Checkbox;
