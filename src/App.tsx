import Routes from 'components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { Normalize } from 'styled-normalize';
import Header from './components/Header/Header';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Bg from 'assets/images/mainBg.jpg';
import LanguageProvider from 'context/LanguageContext/Language.provider';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
    }

    body {
        position: relative;
        min-height: 100vh;
        background: url(${Bg}) center / cover no-repeat;
        font-family: 'Inter', 'Roboto', sans-serif;

        li {
            list-style: none;
        }
    }
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<LanguageProvider>
				<GlobalStyle />
				<Normalize />
				<BrowserRouter>
					<Header />
					<Routes />
				</BrowserRouter>
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default App;
