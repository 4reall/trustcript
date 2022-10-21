import {
	ArticleContainer,
	ContentContainer,
	ImageContainer,
	LabelsContainer,
} from '@/modules/Article/components/Article/Article.styles';
import { IArticle } from '@/common/types/Article';
import { Typography } from '@/common/layout/Typography.styles';
import Label from '@/common/layout/Label/Label';
import ViewsIcon from '@/public/assets/icons/labels/views.svg';
import DateIcon from '@/public/assets/icons/labels/date.svg';
import { article } from '@/mock/articles';
import { convertViews } from '@/common/utils/helpers/converViews';
import useMediaQuery from '@/common/hooks/breakpoints/useMediaQuery';
import { queries } from '@/common/utils/constants/mediaQueries';
import Fb from '@/public/assets/icons/shareBtn/Fb.svg';
import Tw from '@/public/assets/icons/shareBtn/Tw.svg';
import ShareButton, {
	IIconLink,
} from '@/common/components/_ui/ShareButton/ShareButton';
import Image from 'next/image';

interface ArticleProps {
	articleHeaders: IArticle;
	article: typeof article;
}

const links: IIconLink[] = [
	{ href: `https://www.facebook.com/sharer/sharer.php?u=1`, icon: Fb },
	{ href: `https://twitter.com/intent/tweet?url=1&text=`, icon: Tw },
];

const Article = ({ articleHeaders, article }: ArticleProps) => {
	const { title, views, date, category, categoryIcon, image } =
		articleHeaders;
	const isLg = useMediaQuery(queries.up.lg);
	const isMd = useMediaQuery(queries.up.md);

	const renderArticle = (data: typeof article) => {
		return data.map((section) => {
			switch (section.type) {
				case 'text':
					return (
						<Typography
							m={['1rem', 0, 0, 0]}
							as="p"
							variant={isLg ? 'h3' : 'h4'}
						>
							{section.text}
						</Typography>
					);
				case 'title':
					return (
						<Typography
							m={['1rem', 0, 0, 0]}
							as="h3"
							variant={isLg ? 'h2' : 'h3'}
							bold
						>
							{section.text}
						</Typography>
					);
				case 'image':
					return (
						<Image
							src={section.image?.src}
							alt={section.image?.alt}
						/>
					);
				default:
					return <></>;
			}
		});
	};

	return (
		<ArticleContainer>
			<Typography variant={isLg ? 'h1' : 'h2'} bold>
				{title}
			</Typography>
			<LabelsContainer>
				<Label
					icon={{ src: ViewsIcon, alt: 'date' }}
					text={convertViews(views)}
					dark
					small={!isLg}
				/>
				<Label
					icon={{ src: DateIcon, alt: 'date' }}
					text={date}
					dark
					small={!isLg}
				/>
				<ShareButton
					links={links}
					transition={100}
					vertical={!isMd}
					size={isMd ? 'md' : 'sm'}
				/>
			</LabelsContainer>
			<ImageContainer>
				<Image {...image} />
				<Label
					position={{ left: 10, top: 10 }}
					icon={categoryIcon}
					text={category}
					small={!isLg}
				/>
			</ImageContainer>
			<ContentContainer>{renderArticle(article)}</ContentContainer>
		</ArticleContainer>
	);
};

export default Article;
