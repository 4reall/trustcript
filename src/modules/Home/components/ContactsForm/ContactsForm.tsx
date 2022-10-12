import * as Yup from 'yup';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';

import Button from '@/components/_ui/Button/Button';
import CheckboxField from '@/components/_forms/CheckboxField';
import { ContactsFormStyles } from '@/modules/Home/components/ContactsForm/ContactsForm.styles';
import InputField from '@/components/_forms/InputField';

import { useLanguage } from '@/hooks/useLanguage';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';
import { ITypographyData } from '@/modules/Home';

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

interface ContactsFormProps {
	validationMessages: ITypographyData['validationMessages'];
	formText: ITypographyData['form'];
}

const ContactsForm = ({ validationMessages, formText }: ContactsFormProps) => {
	const validationSchema = useMemo(
		() =>
			Yup.object({
				name: Yup.string()
					.min(2, validationMessages.nameMin)
					.max(20, validationMessages.nameMax)
					.required(validationMessages.required),
				company: Yup.string()
					.min(2, validationMessages.companyMin)
					.max(40, validationMessages.companyMax)
					.required(validationMessages.required),
				email: Yup.string()
					.email(validationMessages.email)
					.required(validationMessages.email),
				message: Yup.string()
					.min(10, validationMessages.messageMin)
					.max(300, validationMessages.messageMax)
					.required(validationMessages.required),
				personal: Yup.boolean()
					.oneOf([true], validationMessages.personal)
					.required(validationMessages.required),
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
					placeholder={formText.name}
				/>
				<InputField<IFormValues>
					name="company"
					placeholder={formText.company}
				/>
				<InputField<IFormValues>
					type="email"
					name="email"
					placeholder={formText.email}
				/>
				<InputField<IFormValues>
					name="message"
					textarea
					placeholder={formText.message}
				/>

				<CheckboxField<IFormValues>
					name="personal"
					label={validationMessages.personal}
					variant={isMd ? 'h4' : 'h5'}
				/>
				<Button type="submit">{formText.button}</Button>
			</ContactsFormStyles>
		</FormProvider>
	);
};

export default ContactsForm;
