import { Container } from 'components/layout/Container.styles';
import Promo from 'pages/Main/components/Promo/Promo';
import Slides from 'pages/Main/components/Slides/Slides';
import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

const MainPageStyles = styled.section`
	margin-top: 5rem;
	${mediaQueries.up.md} {
		margin-top: 6rem;
	}
`;

const MainPage = () => {
	return (
		<section>
			<Container maxWidth="xl">
				<Promo />
				<Slides />
			</Container>
		</section>
	);
};

export default MainPage;
