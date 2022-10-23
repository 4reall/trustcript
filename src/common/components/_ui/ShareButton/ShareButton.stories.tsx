import { ThemeDecorator } from 'src/common/styles/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ShareButton, {
	IIconLink,
} from 'src/common/components/_ui/ShareButton/ShareButton';

const links: IIconLink[] = [
	{
		href: `https://www.facebook.com/sharer/sharer.php?u=1`,
		icon: '/assets/icons/shareBtn/Tw.svg',
	},
	{
		href: `https://twitter.com/intent/tweet?url=1&text=`,
		icon: '/assets/icons/shareBtn/Tw.svg',
	},
];

export default {
	title: 'ShareButton',
	component: ShareButton,
	decorators: [ThemeDecorator],
	args: {
		links,
		vertical: false,
		transition: 300,
		size: 'md',
	},
} as ComponentMeta<typeof ShareButton>;

export const Base: ComponentStory<typeof ShareButton> = (args) => (
	<ShareButton {...args} />
);
