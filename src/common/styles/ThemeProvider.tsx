import { StoryFn } from '@storybook/react';
import { theme } from 'src/common/styles/theme';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';

export const ThemeDecorator = (Story: StoryFn) => (
	<ThemeProvider theme={theme}>
		<Story />
	</ThemeProvider>
);
