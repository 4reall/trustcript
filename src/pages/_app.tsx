import { AppProps } from 'next/app';
import { YMaps } from '@pbe/react-yandex-maps';

import Layout from 'src/common/layout/Layout/Layout';
import { Page } from 'src/common/layout/Page.styles';

import { GlobalStyle } from 'src/common/styles/GlobalStyles';
import { theme } from 'src/common/styles/theme';
import Head from 'next/head';
import { Global, ThemeProvider } from '@emotion/react';
import { AbstractIntlMessages, NextIntlProvider } from 'next-intl';
import { useState } from 'react';
import {
	QueryClientProvider,
	Hydrate,
	DehydratedState,
	QueryClient,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from 'src/lib/queryClient';

interface CommonProps {
	messages: AbstractIntlMessages;
	dehydratedState: DehydratedState;
}

const App = ({ Component, pageProps }: AppProps<CommonProps>) => {
	// const queryClient = new QueryClient({
	// 	defaultOptions: {
	// 		queries: {
	// 			refetchOnWindowFocus: false,
	// 			refetchOnMount: false,
	// 			refetchOnReconnect: false,
	// 			retry: 1,
	// 			staleTime: 5 * 1000,
	// 		},
	// 	},
	// });
	const [queryClientInstance] = useState(() => queryClient);
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

			<QueryClientProvider client={queryClientInstance}>
				<Hydrate state={pageProps.dehydratedState}>
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
					<ReactQueryDevtools initialIsOpen={false} />
				</Hydrate>
			</QueryClientProvider>
		</>
	);
};

export default App;
