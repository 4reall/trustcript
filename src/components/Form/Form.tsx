import { useState, FormEvent } from 'react';

import { CheckboxContainer, FormStyles } from 'components/Form/Form.styles';
import Checkbox from 'components/ui/Checkbox/Checkbox';
import Input from 'components/ui/Input/Input';
import Button from 'components/ui/Button/Button';
import { Typography } from 'components/layout/Typography.styles';

import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

const Form = () => {
	const { text } = useLanguage('form');

	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [privacy, setPrivacy] = useState(false);

	const isMd = useMediaQuery(queries.up.md);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({
			name,
			company,
			email,
			message,
			privacy,
		});
	};

	return (
		<FormStyles onSubmit={handleSubmit}>
			<Input
				value={name}
				setValue={(e) => setName(e.target.value)}
				placeholder={text('name')}
			/>
			<Input
				value={company}
				setValue={(e) => setCompany(e.target.value)}
				placeholder={text('company')}
			/>
			<Input
				type="email"
				value={email}
				setValue={(e) => setEmail(e.target.value)}
				placeholder={text('email')}
			/>
			<Input
				value={message}
				setValue={(e) => setMessage(e.target.value)}
				textarea
				placeholder={text('message')}
			/>
			<CheckboxContainer>
				<Checkbox
					value={privacy}
					setValue={() => setPrivacy(!privacy)}
				/>
				<Typography variant={isMd ? 'h4' : 'h5'}>
					{text('personal')}
				</Typography>
			</CheckboxContainer>
			<Button onClick={() => {}}>{text('button')}</Button>
		</FormStyles>
	);
};

export default Form;
