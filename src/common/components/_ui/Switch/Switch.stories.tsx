import { ThemeDecorator } from '@/common/styles/ThemeProvider';
import Switch from '@/common/components/_ui/Switch/Switch';
import { ComponentMeta, ComponentStory, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

export default {
	title: 'Switch',
	component: Switch,
	decorators: [ThemeDecorator],
	args: {
		checked: false,
	},
} as ComponentMeta<typeof Switch>;

export const Base: ComponentStory<typeof Switch> = (args) => {
	const [_, updateArgs] = useArgs();

	return (
		<Switch
			{...args}
			onCheckedChange={() => updateArgs({ checked: !args.checked })}
		/>
	);
};
