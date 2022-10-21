import { AppProps } from 'next/app';
import { YMaps } from '@pbe/react-yandex-maps';

import Layout from '@/common/layout/Layout/Layout';
import { Page } from '@/common/layout/Page.styles';

import { GlobalStyle } from '@/common/styles/GlobalStyles';
import { theme } from '@/common/styles/theme';
import Head from 'next/head';
import { Global, ThemeProvider } from '@emotion/react';
import { AbstractIntlMessages, NextIntlProvider } from 'next-intl';

interface CommonProps {
	messages: AbstractIntlMessages;
}

const App = ({ Component, pageProps }: AppProps<CommonProps>) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#000000" />
				<title>trustcript</title>
			</Head>

			<ThemeProvider theme={theme}>
				<NextIntlProvider messages={pageProps.messages}>
					<YMaps>
						<Global styles={GlobalStyle} />
						<Layout>
							<Page>
								<Component {...pageProps} />
							</Page>
						</Layout>
					</YMaps>
				</NextIntlProvider>
			</ThemeProvider>
		</>
	);
};

export default App;
