import Header from '@/components/../../../modules/Header/Header';
import Footer from '@/components/Footer/Footer';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
