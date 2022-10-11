import { ThemeDecorator } from '@/common/styles/ThemeProvider';
import Checkbox, { CheckboxProps } from '@/components/_ui/Checkbox/Checkbox';
import { ComponentMeta, ComponentStory, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

export default {
	title: 'Checkbox',
	component: Checkbox,
	decorators: [ThemeDecorator],
	args: {
		checked: false,
	},
} as ComponentMeta<typeof Checkbox>;

export const Base: ComponentStory<typeof Checkbox> = (args) => {
	const [_, updateArgs] = useArgs();

	return (
		<Checkbox
			{...args}
			onClick={() => updateArgs({ checked: !args.checked })}
		/>
	);
};
