import { Container } from 'components/layout/Container.styles';
import Promo from 'pages/Main/screens/Promo/Promo';
import Slides from 'pages/Main/screens/Slides/Slides';
import Tools from 'pages/Main/screens/Tools/Tools';
import Benefits from 'pages/Main/screens/Benefits/Benefits';
import Contacts from 'pages/Main/screens/Contacts/Contacts';

const MainPage = () => {
	return (
		<section>
			<Container maxWidth="xl">
				<Promo />
				<Slides />
				<Tools />
				<Benefits />
				<Contacts />
			</Container>
		</section>
	);
};

export default MainPage;
