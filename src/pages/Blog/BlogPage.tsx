import { Typography } from 'components/layout/Typography.styles';
import Content from 'pages/share/Content/Content';
import { IProduct } from 'types/Product';
import { products } from 'utils/mock/products';
import { ArticleFilters } from 'utils/mock/filters';
import ProductCard from 'components/Card/ProductCard';
import { useLanguage } from 'hooks/useLanguage';
import { Page } from 'pages/share/Page.styles';
import Labels from 'components/Label/Labels';
import { articles } from 'utils/mock/articles';
import { IArticle } from 'types/Article';
import ArticleCard from 'components/Card/ArticleCard';

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
				filters={ArticleFilters}
				render={(card) => <ArticleCard {...card} />}
				filterType="theme"
			/>
		</Page>
	);
};

export default BlogPage;