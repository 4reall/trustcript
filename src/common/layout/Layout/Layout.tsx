import Footer from 'src/common/components/Footer/Footer';
import { Header } from 'src/modules/Header';
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
