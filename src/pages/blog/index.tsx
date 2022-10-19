import { Typography } from '@/layout/Typography.styles';
import Articles from '@/modules/Blog/component/Articles';
import { useLanguage } from '@/hooks/useLanguage';

const BlogPage = () => {
	const { text } = useLanguage('products');

	return (
		<>
			<Typography as="h2" variant="h2" bold>
				{text('title')}
			</Typography>
			<Typography m={['2rem', 0, '2rem', 0]} as="p" variant="h4">
				{text('text')}
			</Typography>
			<Articles />
		</>
	);
};

export default BlogPage;