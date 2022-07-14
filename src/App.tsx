import Routes from 'components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { Normalize } from 'styled-normalize';
import Header from './components/Header/Header';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Background } from './components/layout/Background/Background.styles';

import Bg from 'assets/images/mainBg.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', 'Roboto', sans-serif;
  }
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Normalize />
			<GlobalStyle />
			<BrowserRouter>
				<Background url={Bg}>
					<Header />
					<Routes />
				</Background>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
