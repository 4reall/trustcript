import { Typography } from 'components/_layout/Typography.styles';
import Catalogue from 'pages/share/Catalogue/Catalogue';
import { articleFilters } from 'utils/mock/filters';
import { useLanguage } from 'hooks/useLanguage';
import { Page } from 'components/_layout/Page.styles';
import Articles from 'pages/Blog/component/Articles';

const BlogPage = () => {
	const { text } = useLanguage('products');
	return (
		<Page>
			<Typography as="h2" variant="h2" bold>
				{text('title')}
			</Typography>
			<Typography mt="2rem" mb="2rem" as="p" variant="h4">
				{text('text')}
			</Typography>
			<Articles />
			{/*<Catalogue<IArticle>*/}
			{/*	cards={articles}*/}
			{/*	filters={articleFilters}*/}
			{/*	render={(card) => <ArticleCard {...card} />}*/}
			{/*	filterType="theme"*/}
			{/*/>*/}
		</Page>
	);
};

export default BlogPage;
