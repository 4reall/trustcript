import { Normalize } from 'styled-normalize';
import { YMaps } from '@pbe/react-yandex-maps';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import Routes from 'components/routes/Routes';
import LanguageProvider from 'context/LanguageContext/Language.provider';
import Footer from 'components/_layout/Footer/Footer';
import { GlobalStyle } from 'GlobalStyles';

import { theme } from 'theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<LanguageProvider>
				<YMaps>
					<GlobalStyle />
					<Normalize />
					<BrowserRouter>
						<Routes />
					</BrowserRouter>
				</YMaps>
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default App;
