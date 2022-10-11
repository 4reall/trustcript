import {
	ContactsContainer,
	ContentContainer,
	MapContainer,
} from '@/modules/Contacts/components/Contacts/Contacts.styles';
import ContactsForm from '@/modules/Contacts/components/ContactsForm/ContactsForm';
import { Typography } from '@/layout/Typography.styles';
import Map from '@/components/Map/Map';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';
import Links from '@/modules/Contacts/components/Links';
import Call from '@/modules/Contacts/assets/Call.svg';
import Geoposition from '@/modules/Contacts/assets/Geoposition.svg';
import Mail from '@/modules/Contacts/assets/Mail.svg';
import { useLanguage } from '@/hooks/useLanguage';
import { ILink } from '@/modules/Contacts/types/Link';

const Contacts = () => {
	const { text } = useLanguage('contacts');
	const isLg = useMediaQuery(queries.up.lg);

	const links: ILink[] = [
		{
			href: 'https://yandex.ru/maps/213/moscow/house/leningradskiy_prospekt_27s2/Z04YcwFlT00BQFtvfXt5cnVgbQ==/?from=api-maps&ll=37.565686%2C55.783939&origin=jsapi_2_1_79&z=16.82',
			src: Geoposition,
			text: text('address'),
		},
		{ href: 'tel:+74950000000', src: Call, text: text('tel') },
		{ href: 'mailto:admin@trustcrypt.com', src: Mail, text: text('email') },
	];

	return (
		<ContactsContainer>
			<Typography
				as="h2"
				align="center"
				variant={isLg ? 'h2' : 'h3'}
				mb={isLg ? '3rem' : '1rem'}
				bold
			>
				{text('title')}
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
