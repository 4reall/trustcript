import * as Yup from 'yup';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';

import Button from 'src/common/components/_ui/Button/Button';
import CheckboxField from 'src/common/components/_forms/CheckboxField';
import { ContactsFormStyles } from 'src/modules/Home/components/ContactsForm/ContactsForm.styles';
import InputField from 'src/common/components/_forms/InputField';

import useMediaQuery from 'src/common/hooks/breakpoints/useMediaQuery';
import { queries } from 'src/common/utils/constants/mediaQueries';
import { ITypographyData } from 'src/modules/Home';
import { useTranslations } from 'next-intl';

export interface IFormValues {
	name: string;
	company: string;
	email: string;
	message: string;
	personal: boolean;
}

const defaultValues: IFormValues = {
	name: '',
	company: '',
	email: '',
	message: '',
	personal: false,
};

const ContactsForm = () => {
	const tvalidation = useTranslations('validationMessages');
	const tform = useTranslations('form');

	const validationSchema = useMemo(
		() =>
			Yup.object({
				name: Yup.string()
					.min(2, tvalidation('nameMin'))
					.max(20, tvalidation('nameMax'))
					.required(tvalidation('required')),
				company: Yup.string()
					.min(2, tvalidation('companyMin'))
					.max(40, tvalidation('companyMax'))
					.required(tvalidation('required')),
				email: Yup.string()
					.email(tvalidation('email'))
					.required(tvalidation('required')),
				message: Yup.string()
					.min(10, tvalidation('messageMin'))
					.max(300, tvalidation('messageMax'))
					.required(tvalidation('required')),
				personal: Yup.boolean()
					.oneOf([true], tvalidation('personal'))
					.required(tvalidation('required')),
			}),
		[]
	);

	const methods = useForm<IFormValues>({
		defaultValues,
		resolver: yupResolver(validationSchema),
		mode: 'onTouched',
	});

	const isMd = useMediaQuery(queries.up.md);

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		alert(JSON.stringify(data, null, ' '));
		methods.reset();
	};

	return (
		<FormProvider {...methods}>
			<ContactsFormStyles onSubmit={methods.handleSubmit(onSubmit)}>
				<InputField<IFormValues>
					name="name"
					placeholder={tform('name')}
				/>
				<InputField<IFormValues>
					name="company"
					placeholder={tform('company')}
				/>
				<InputField<IFormValues>
					type="email"
					name="email"
					placeholder={tform('email')}
				/>
				<InputField<IFormValues>
					name="message"
					textarea
					placeholder={tform('message')}
				/>

				<CheckboxField<IFormValues>
					name="personal"
					label={tform('personal')}
					variant={isMd ? 'h4' : 'h5'}
				/>
				<Button type="submit">{tform('button')}</Button>
			</ContactsFormStyles>
		</FormProvider>
	);
};

export default ContactsForm;
