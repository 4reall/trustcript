import { Page } from 'components/_layout/Page.styles';
import Article from 'pages/Article/components/Article/Article';
import Popular from 'pages/Article/components/Popular/Popular';
import { ArticlePageContainer } from 'pages/Article/ArticlePage.styles';
import { useParams } from 'react-router-dom';
import { article, articles, getArticleById } from 'utils/mock/articles';

const ArticlePage = () => {
	const { articleId } = useParams();
	if (!articleId) return <></>;

	return (
		<Page>
			<ArticlePageContainer>
				<Article
					articleHeaders={getArticleById(articleId)}
					article={article}
				/>
				<Popular articles={articles}></Popular>
			</ArticlePageContainer>
		</Page>
	);
};

export default ArticlePage;
