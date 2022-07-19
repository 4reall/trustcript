import Routes from 'components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { Normalize } from 'styled-normalize';
import Header from './components/Header/Header';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Bg from 'assets/images/mainBg.jpg';
import LanguageProvider from 'context/LanguageContext/Language.provider';
import Footer from 'components/Footer/Footer';
import { mediaQueries } from 'utils/constants/mediaQueries';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
    }

	html, body {
		height: 100%;
		width: 100%;
	}
	
    body {
        position: relative;
        background: url(${Bg}) center / cover no-repeat;
        font-family: 'Inter', 'Roboto', sans-serif;
		overflow-x: hidden;
		padding-top: 5rem;
		${mediaQueries.up.md} {
			padding-top: 6rem;
		}
    }

	#root {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1 0 auto;
	}

	li {
		list-style: none;
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
					<main>
						<Routes />
					</main>
					<Footer />
				</BrowserRouter>
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default App;
