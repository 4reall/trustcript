import {
	ArticleContainer,
	ContentContainer,
	ImageContainer,
	LabelsContainer,
} from 'pages/Article/screens/Article/Article.styles';
import { IArticle } from 'types/Article';
import { Typography } from 'components/layout/Typography.styles';
import Label from 'components/Label/Label';
import { ReactComponent as ViewsIcon } from 'assets/icons/labels/views.svg';
import { ReactComponent as DateIcon } from 'assets/icons/labels/date.svg';
import { Img } from 'components/layout/Img.styles';
import { article } from 'utils/mock/articles';
import { convertViews } from 'utils/helpers/converViews';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import ShareBtn from 'components/ui/ShareBtn/ShareBtn';

interface ArticleProps {
	articleHeaders: IArticle;
	article: typeof article;
}

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
							mt="1rem"
							as="p"
							variant={isLg ? 'h3' : 'h4'}
						>
							{section.text}
						</Typography>
					);
				case 'title':
					return (
						<Typography
							mt="1rem"
							as="h3"
							variant={isLg ? 'h2' : 'h3'}
							bold
						>
							{section.text}
						</Typography>
					);
				case 'image':
					return <Img {...section.image} />;
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
					icon={<ViewsIcon />}
					text={convertViews(views)}
					dark
					small={!isLg}
				/>
				<Label icon={<DateIcon />} text={date} dark small={!isLg} />
				<ShareBtn link="1" vertical={!isMd} />
			</LabelsContainer>
			<ImageContainer>
				<Img {...image} />
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
