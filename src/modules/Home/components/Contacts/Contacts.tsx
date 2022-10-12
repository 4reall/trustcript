import {
	ContactsContainer,
	ContentContainer,
	MapContainer,
} from '@/modules/Home/components/Contacts/Contacts.styles';
import ContactsForm from '@/modules/Home/components/ContactsForm/ContactsForm';
import { Typography } from '@/layout/Typography.styles';
import Map from '@/components/Map/Map';
import Links from '@/modules/Home/components/Contacts/Links';
import { ILink } from '@/modules/Home/types/Link';

interface ContactsProps {
	title: string;
	links: ILink[];
	big: boolean;
}

const Contacts = ({ title, links, big }: ContactsProps) => {
	return (
		<ContactsContainer>
			<Typography
				as="h2"
				align="center"
				variant={big ? 'h2' : 'h3'}
				m={[0, 0, big ? '3rem' : '1rem', 0]}
				bold
			>
				{title}
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
