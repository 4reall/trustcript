import Container from '../layout/Container/Container';
import { HeaderStyles } from './Header.styles';
import Navigation from '../Navigation/Navigation';
import { Col, Grid } from '../layout/Grid/Grid.styles';
import Image from '../layout/Image/Image';

import Logo from 'assets/icons/logo/logo.svg';
import Twitter from 'assets/icons/networks/twitter.svg';
import Telegram from 'assets/icons/networks/telegram.svg';
import WhatsUp from 'assets/icons/networks/whatsup.svg';
import Youtube from 'assets/icons/networks/youtube.svg';
import { Link } from 'react-router-dom';
import { PathsEnum } from 'utils/constants/paths';
import Flex from '../layout/Flex/Flex';
import Language from '../Language/Language';

const Header = () => {
	return (
		<HeaderStyles>
			<Container maxWidth={[null, 'sm', 'sm', 'md', 'lg']}>
				<Grid size={6} align="center">
					<Col col={2}>
						<Link to={PathsEnum.Main}>
							<Image src={Logo} alt="logo" />
						</Link>
					</Col>
					<Col col={4}>
						<Flex align="center" justify="space-between">
							<Navigation my={'2rem'} />
							<Language />
							<Image alt="" src={Telegram} />
							<Image alt="" src={Twitter} />
							<Image alt="" src={WhatsUp} />
							<Image alt="" src={Youtube} />
						</Flex>
					</Col>
				</Grid>
			</Container>
		</HeaderStyles>
	);
};

export default Header;
