import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import {
	ContactsContainer,
	ContentContainer,
	MapContainer,
} from 'src/modules/Home/components/Contacts/Contacts.styles';
import ContactsForm from 'src/modules/Home/components/ContactsForm/ContactsForm';
import Links, { ILink } from 'src/modules/Home/components/Contacts/Links';

import { Typography } from 'src/common/layout/Typography.styles';
import Map from 'src/common/components/Map/Map';
import Geoposition from 'public/assets/icons/contacts/Geoposition.svg';
import Call from 'public/assets/icons/contacts/Call.svg';
import Mail from 'public/assets/icons/contacts/Mail.svg';

interface ContactsProps {
	big: boolean;
}

const Contacts = ({ big }: ContactsProps) => {
	const t = useTranslations('contacts');
	const links: ILink[] = useMemo(
		() => [
			{
				href: 'https://yandex.ru/maps/213/moscow/house/leningradskiy_prospekt_27s2/Z04YcwFlT00BQFtvfXt5cnVgbQ==/?from=api-maps&ll=37.565686%2C55.783939&origin=jsapi_2_1_79&z=16.82',
				src: Geoposition,
				text: t('address'),
			},
			{ href: 'tel:+74950000000', src: Call, text: t('tel') },
			{
				href: 'mailto:admin@trustcrypt.com',
				src: Mail,
				text: t('email'),
			},
		],
		[]
	);

	return (
		<ContactsContainer>
			<Typography
				as="h2"
				align="center"
				variant={big ? 'h2' : 'h3'}
				m={[0, 0, big ? '3rem' : '1rem', 0]}
				bold
			>
				{t('title')}
			</Typography>
			<ContentContainer>
				<ContactsForm />
				<MapContainer>
					<Links links={links} />
					<Map />
				</MapContainer>
			</ContentContainer>
		</ContactsContainer>
	);
};

export default Contacts;
