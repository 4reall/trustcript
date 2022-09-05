import {
	ContactsContainer,
	ContentContainer,
	MapContainer,
} from 'pages/Main/screens/Contacts/Contacts.styles';
import Form from 'components/Form/Form';
import { Typography } from 'components/_layout/Typography.styles';
import Map from 'components/Map/Map';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import Links, { ILink } from 'pages/Main/screens/Contacts/Links';
import Call from 'assets/icons/contacts/Call.svg';
import Geoposition from 'assets/icons/contacts/Geoposition.svg';
import Mail from 'assets/icons/contacts/Mail.svg';
import { useLanguage } from 'hooks/useLanguage';

const Contacts = () => {
	const { text } = useLanguage('contacts');
	const isMd = useMediaQuery(queries.up.md);

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
				variant={isMd ? 'h2' : 'h3'}
				mb={isMd ? '3rem' : '1rem'}
				bold
			>
				{text('title')}
			</Typography>
			<ContentContainer>
				<Form />
				<MapContainer>
					<Links links={links} />
					<Map />
				</MapContainer>
			</ContentContainer>
		</ContactsContainer>
	);
};

export default Contacts;
