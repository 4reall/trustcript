import Promo from '@/modules/Home/components/Promo/Promo';
import Slides from '@/modules/Home/components/Slides/Slides';
import Tools from '@/modules/Home/components/Tools/Tools';
import Benefits from '@/modules/Home/components/Benefits/Benefits';
import Contacts from '@/modules/Contacts/components/Contacts/Contacts';

const HomePage = () => {
	return (
		<>
			<Promo />
			<Slides />
			<Tools />
			<Benefits />
			<Contacts />
		</>
	);
};

export default HomePage;
