import Logo from 'assets/icons/logo/logo.svg';
import { Link } from 'react-router-dom';
import { PathsEnum } from 'utils/constants/paths';

import Twitter from 'assets/icons/networks/twitter.svg';
import Telegram from 'assets/icons/networks/telegram.svg';
import WhatsUp from 'assets/icons/networks/whatsup.svg';
import Youtube from 'assets/icons/networks/youtube.svg';
import { Col, Grid } from 'components/layout/Grid.styles';
import { Container } from 'components/layout/Container.styles';
import { Image } from 'components/layout/Image.styles';
import { HeaderStyles } from 'components/Header/Header.styles';
import { Flex } from 'components/layout/Flex.styles';
import Navigation from 'components/Navigation/Navigation';
import Language from 'components/Header/components/Language/Language';
import IconLinksBar, {
	IconLink,
} from 'components/Header/components/LinkIconsBar/LinkIconsBar';
import Ru from 'assets/icons/countries/ru.svg';
import Uk from 'assets/icons/countries/uk.svg';
import Select from 'components/ui/Select/Select';
import LanguageSelect from 'components/Header/components/Language/LanguageSelect';

const iconLinks: IconLink[] = [
	{
		href: 'https//google.com',
		alt: 'twitter icon',
		image: Twitter,
	},
	{
		href: 'https//google.com',
		alt: 'telegram icon',
		image: Telegram,
	},
	{
		href: 'https//google.com',
		alt: 'youtube icon',
		image: Youtube,
	},
	{
		href: 'https//google.com',
		alt: 'whats up icon',
		image: WhatsUp,
	},
];

const labels = [
	{ name: 'ru', alt: 'ru icon', src: Ru },
	{ name: 'uk', alt: 'ru icon', src: Uk },
];

const Header = () => {
	return (
		<HeaderStyles p={'2rem'}>
			<Container maxWidth="xl">
				<Grid gridSize={6} align="center">
					<Col col={2}>
						<Link to={PathsEnum.Main}>
							<Image src={Logo} alt="logo" />
						</Link>
					</Col>
					<Col col={4}>
						<Flex align="center" justify="flex-end">
							<Navigation />
							{/*<Language labels={labels} />*/}
							<LanguageSelect />
							<IconLinksBar iconLinks={iconLinks} />
						</Flex>
					</Col>
				</Grid>
			</Container>
		</HeaderStyles>
	);
};

export default Header;
