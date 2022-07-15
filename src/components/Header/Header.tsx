import Container from '../layout/Container/Container';
import { HeaderStyles } from './Header.styles';
import Navigation from '../Navigation/Navigation';
import { Col, GridStyles } from '../layout/Grid/Grid.styles';
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
		<HeaderStyles padding={{ p: '1.5rem' }}>
			<Container maxWidth="xl">
				<GridStyles gridSize={6} align="center">
					<Col col={2}>
						<Link to={PathsEnum.Main}>
							<Image src={Logo} alt="logo" />
						</Link>
					</Col>
					<Col col={4}>
						<Flex align="center" justify="flex-end">
							<Navigation />
							<Language margin={{ mx: '4rem' }} />
							<Image alt="telegram" src={Telegram} />
							<Image
								margin={{ ml: '0.5rem' }}
								alt="twitter"
								src={Twitter}
							/>
							<Image
								margin={{ ml: '0.5rem' }}
								alt="whatsup"
								src={WhatsUp}
							/>
							<Image
								margin={{ ml: '0.5rem' }}
								alt="youtube"
								src={Youtube}
							/>
						</Flex>
					</Col>
				</GridStyles>
			</Container>
		</HeaderStyles>
	);
};

export default Header;
