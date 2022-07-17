import Routes from 'components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { Normalize } from 'styled-normalize';
import Header from './components/Header/Header';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Bg from 'assets/images/mainBg.jpg';

const GlobalStyle = createGlobalStyle`
  body {
	  min-height: 100vh;
	  background: url(${Bg}) center / cover no-repeat; 
	  font-family: 'Inter', 'Roboto', sans-serif;
	  
  }
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Normalize />
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Routes />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
