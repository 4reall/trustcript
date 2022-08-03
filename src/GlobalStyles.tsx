import { createGlobalStyle } from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

import Bg from 'assets/images/mainBg.webp';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
		
    }
	
	html, body {
		height: 100vh;
		//width: 100vw;
	}
	
	html {
		background: ${({ theme }) => theme.palette.mainBg.color};
	}
	
    body {
        font-family: 'Inter', 'Roboto', sans-serif;
        position: relative;
		padding-top: 5rem;
		-webkit-overflow-scrolling: touch;
		overflow-y: scroll;
		overflow-x: hidden;
		${mediaQueries.up.md} {
			padding-top: 7.5rem;
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
