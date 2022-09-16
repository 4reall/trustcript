import Promo from 'pages/Main/components/Promo/Promo';
import Slides from 'pages/Main/components/Slides/Slides';
import Tools from 'pages/Main/components/Tools/Tools';
import Benefits from 'pages/Main/components/Benefits/Benefits';
import Contacts from 'pages/Main/components/Contacts/Contacts';
import { Page } from 'components/_layout/Page.styles';

const MainPage = () => {
	return (
		<Page>
			<Promo />
			<Slides />
			<Tools />
			<Benefits />
			<Contacts />
		</Page>
	);
};

export default MainPage;
