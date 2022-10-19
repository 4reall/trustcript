import { MessageContainer } from '@/modules/Page404/Page404.styles';
import { Typography } from '@/layout/Typography.styles';
import { useTheme } from '@emotion/react';

const Page404 = () => {
	const theme = useTheme();
	return (
		<MessageContainer>
			<Typography variant="h1" color={theme.palette.active.normal} bold>
				404
			</Typography>
			<Typography m={['1rem', 0, 0, 0]} variant="h2">
				There is no such page
			</Typography>
		</MessageContainer>
	);
};

export default Page404;
