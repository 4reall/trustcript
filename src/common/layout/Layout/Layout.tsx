import Footer from '@/common/components/Footer/Footer';
import { Header } from '@/modules/Header';
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
