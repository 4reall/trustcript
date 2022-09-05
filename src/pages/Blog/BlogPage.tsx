import { Typography } from 'components/_layout/Typography.styles';
import Content from 'pages/share/Content/Content';
import { IProduct } from 'types/Product';
import { products } from 'utils/mock/products';
import { articleFilters } from 'utils/mock/filters';
import ProductCard from 'components/_cards/Card/ProductCard';
import { useLanguage } from 'hooks/useLanguage';
import { Page } from 'pages/share/Page.styles';
import Labels from 'components/Label/Labels';
import { articles } from 'utils/mock/articles';
import { IArticle } from 'types/Article';
import ArticleCard from 'components/_cards/Card/ArticleCard';

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
			<Content<IArticle>
				cards={articles}
				filters={articleFilters}
				render={(card) => <ArticleCard {...card} />}
				filterType="theme"
			/>
		</Page>
	);
};

export default BlogPage;
