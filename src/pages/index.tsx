import { GetStaticPropsContext } from 'next';
import { Home } from 'src/modules/Home';

const HomePage = () => {
	return <Home />;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`public/locales/${locale}.json`)).default,
		},
	};
}

export default HomePage;
