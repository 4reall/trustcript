import BtnCard from '@/components/BtnCard/BtnCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Development from '@/assets/images/articles/development.png';
import { ArticleFiltersEnum, DateFiltersEnum } from '@/utils/constants/filters';
import DevelopmentIcon from '@/assets/icons/categories/development.svg';
import { ThemeDecorator } from '@/common/styles/ThemeProvider';

const card = {
	description:
		'Нашу жизнь невозможно представить без компьютеров, смартфонов, а значит и нужного для их работы ПО. Всего этого не было бы без кодинга. Хотя это не новый термин, но люди всё еще плохо понимают, что он означает.',
	title: 'Что такое кодинг и зачем нужны тестировщики?',
	image: { src: Development, alt: 'article image' },
	buttonText: 'click',
	labels: {
		views: 24000,
		category: ArticleFiltersEnum.DEVELOPMENT,
		categoryIcon: { src: DevelopmentIcon, alt: 'some image' },
	},
};

export default {
	title: 'BtnCard',
	component: BtnCard,
	decorators: [ThemeDecorator],
	args: { ...card },
} as ComponentMeta<typeof BtnCard>;

export const Base: ComponentStory<typeof BtnCard> = (args) => {
	return (
		<div style={{ margin: '0 auto', width: '30rem' }}>
			<BtnCard {...args} />
		</div>
	);
};
