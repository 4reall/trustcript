import { Container } from 'components/layout/Container.styles';
import Promo from 'pages/Main/components/Promo/Promo';
import Slider from 'pages/Main/components/Slider/Slider';
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
				{/*<Promo />*/}
				<Slider />
			</Container>
		</section>
	);
};

export default MainPage;
