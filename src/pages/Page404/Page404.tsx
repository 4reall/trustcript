import { Container } from 'components/_layout/Container.styles';
import { Page } from 'components/_layout/Page.styles';
import { MessageContainer } from 'pages/Page404/Page404.styles';
import { Typography } from 'components/_layout/Typography.styles';
import { useTheme } from 'styled-components';

const Page404 = () => {
	const theme = useTheme();
	return (
		<MessageContainer>
			<Typography variant="h1" color={theme.palette.active.normal} bold>
				404
			</Typography>
			<Typography mt="1rem" variant="h2">
				There is no such page
			</Typography>
		</MessageContainer>
	);
};

export default Page404;
