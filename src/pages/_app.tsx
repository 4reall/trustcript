import { AppProps } from 'next/app';
import { YMaps } from '@pbe/react-yandex-maps';

import Layout from '@/components/Layout/Layout';
import { Page } from '@/layout/Page.styles';

import { GlobalStyle } from '@/common/styles/GlobalStyles';
import LanguageProvider from '@/context/LanguageContext/Language.provider';
import { theme } from '@/common/styles/theme';
import Head from 'next/head';
import { Global, ThemeProvider } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
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
				<LanguageProvider>
					<YMaps>
						<Global styles={GlobalStyle} />
						<Layout>
							<Page>
								<Component {...pageProps} />
							</Page>
						</Layout>
					</YMaps>
				</LanguageProvider>
			</ThemeProvider>
		</>
	);
}
