import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { ThemeDecorator } from 'src/common/styles/ThemeProvider';

export default {
	title: 'Button',
	component: Button,
	decorators: [ThemeDecorator],
	args: {
		outline: false,
		dark: false,
		small: false,
		disabled: false,
		hide: false,
		full: false,
	},
} as ComponentMeta<typeof Button>;

export const Base: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Button</Button>
);
