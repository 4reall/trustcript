import { Normalize } from 'styled-normalize';
import { YMaps } from '@pbe/react-yandex-maps';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import Routes from 'components/routes/Routes';
import LanguageProvider from 'context/LanguageContext/Language.provider';
import Footer from 'components/Footer/Footer';

import { theme } from 'theme';
import { mediaQueries } from 'utils/constants/mediaQueries';

import Bg from 'assets/images/mainBg.jpg';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
		
    }
	
	html, body {
		height: 100vh;
		width: 100%;
	}
	
	html {
		background: ${({ theme }) => theme.palette.mainBg.color};
	}
	
    body {
        position: relative;
        font-family: 'Inter', 'Roboto', sans-serif;
		padding-top: 5rem;
		-webkit-overflow-scrolling: touch;
		overflow-y: scroll;
		overflow-x: hidden;
		${mediaQueries.up.md} {
			padding-top: 6rem;
		}
    }

	#root {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		background: url(${Bg}) center / cover no-repeat;
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
				<YMaps>
					<GlobalStyle />
					<Normalize />
					<BrowserRouter>
						<Header />
						<main>
							<Routes />
						</main>
						<Footer />
					</BrowserRouter>
				</YMaps>
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default App;
