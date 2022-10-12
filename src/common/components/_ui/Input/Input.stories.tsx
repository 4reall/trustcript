import Input from '@/components/_ui/Input/Input';
import { ThemeDecorator } from '@/common/styles/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Input',
	component: Input,
	decorators: [ThemeDecorator],
	args: {
		textarea: false,
	},
} as ComponentMeta<typeof Input>;

export const Base: ComponentStory<typeof Input> = (args) => (
	<div style={{ padding: '2rem' }}>
		<Input {...args} />
	</div>
);
