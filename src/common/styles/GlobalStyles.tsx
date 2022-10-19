import { mediaQueries } from '@/utils/constants/mediaQueries';
import Bg from '@/assets/images/thumbnails/mainBg.webp';
import { css } from '@emotion/react';

export const GlobalStyle = css`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		-webkit-tap-highlight-color: transparent;
	}

	html,
	body {
		height: 100vh;
	}

	html {
		background: rgba(5, 7, 10, 1);
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

	#__next {
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1 0 auto;
		background: url(${Bg.src}) center / cover no-repeat;
	}

	li {
		list-style: none;
	}
`;
