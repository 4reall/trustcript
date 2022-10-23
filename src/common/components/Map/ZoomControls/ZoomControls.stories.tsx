import { ThemeDecorator } from 'src/common/styles/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ZoomControls from 'src/common/components/Map/ZoomControls/ZoomControls';

export default {
	title: 'ZoomControls',
	component: ZoomControls,
	decorators: [ThemeDecorator],
	argTypes: {
		handleMinusClick: {
			table: {
				disable: true,
			},
		},
		handlePlusClick: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		position: {
			left: '50%',
		},
	},
} as ComponentMeta<typeof ZoomControls>;

export const Base: ComponentStory<typeof ZoomControls> = (args) => {
	return <ZoomControls {...args} />;
};
