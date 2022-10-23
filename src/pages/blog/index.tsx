import { Typography } from 'src/common/layout/Typography.styles';
import Articles from 'src/modules/Blog/component/Articles';

const BlogPage = () => {
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
