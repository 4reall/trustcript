import IconButton from '@/components/_ui/IconButton/IconButton';
import { ThemeDecorator } from '@/common/styles/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from 'next/image';

export default {
	title: 'IconButton',
	component: IconButton,
	decorators: [ThemeDecorator],
	args: {
		small: false,
		hide: false,
	},
} as ComponentMeta<typeof IconButton>;

export const Base: ComponentStory<typeof IconButton> = (args) => {
	return (
		<IconButton {...args}>
			<Image
				src="/assets/icons/arrows/Vector.svg"
				width={args.small ? 15 : 20}
				height={args.small ? 15 : 20}
			/>
		</IconButton>
	);
};
