import { useState, FormEvent, useMemo, useEffect } from 'react';

import { CheckboxContainer, FormStyles } from 'components/Form/Form.styles';
import Checkbox from 'components/ui/Checkbox/Checkbox';
import Input from 'components/ui/Input/Input';
import Button from 'components/ui/Button/Button';
import { Typography } from 'components/layout/Typography.styles';

import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from 'components/layout/ErrorMessage.styles';

export interface IFormValues {
	name: string;
	company: string;
	email: string;
	message: string;
	personal: boolean;
}

const Form = () => {
	const { text: formText } = useLanguage('form');
	const { text: errorText } = useLanguage('errors');

	const validationSchema = useMemo(
		() =>
			Yup.object({
				name: Yup.string()
					.min(2, errorText('nameMin'))
					.max(20, errorText('nameMax'))
					.required(errorText('required')),
				company: Yup.string()
					.min(2, errorText('companyMin'))
					.max(40, errorText('companyMax'))
					.required(errorText('required')),
				email: Yup.string()
					.email(errorText('email'))
					.required(errorText('email')),
				message: Yup.string()
					.min(10, errorText('messageMin'))
					.max(300, errorText('messageMax'))
					.required(errorText('required')),
				personal: Yup.boolean()
					.oneOf([true], errorText('personal'))
					.required(errorText('required')),
			}),
		[errorText]
	);

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<IFormValues>({
		resolver: yupResolver(validationSchema),
		mode: 'onTouched',
	});

	useEffect(() => {
		reset();
	}, [formText, errorText]);

	const isMd = useMediaQuery(queries.up.md);

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		alert(JSON.stringify(data, null, ' '));
		reset();
	};

	return (
		<FormStyles onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="name"
				register={register}
				error={errors.name}
				placeholder={formText('name')}
			/>
			<Input
				label="company"
				register={register}
				error={errors.company}
				placeholder={formText('company')}
			/>
			<Input
				type="email"
				label="email"
				register={register}
				error={errors.email}
				placeholder={formText('email')}
			/>
			<Input
				label="message"
				register={register}
				textarea
				error={errors.message}
				placeholder={formText('message')}
			/>

			<CheckboxContainer>
				<Checkbox name="personal" control={control} />
				<Typography variant={isMd ? 'h4' : 'h5'}>
					{formText('personal')}
				</Typography>
			</CheckboxContainer>
			<ErrorMessage>{errors.personal?.message}</ErrorMessage>
			<Button onClick={() => {}}>{formText('button')}</Button>
		</FormStyles>
	);
};

export default Form;
