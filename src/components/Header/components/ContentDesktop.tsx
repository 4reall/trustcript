import { Link } from 'react-router-dom';

import { Col, Grid } from 'components/layout/Grid.styles';
import { Image } from 'components/layout/Image.styles';
import { Flex } from 'components/layout/Flex.styles';
import Navigation from 'components/Navigation/Navigation';
import LanguageSwitcher from 'components/ui/LanguageSwitcher/LanguageSwitcher';
import { SocialLinksContainer } from 'components/Header/Header.styles';

import { PathsEnum } from 'utils/constants/paths';
import { ContentProps } from 'components/Header/Header';

import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

import Logo from 'assets/icons/logo/logo.svg';

const ContentDesktop = ({ options, socials }: ContentProps) => {
	const isLg = useMediaQuery(queries.up.lg);
	return (
		<Grid gridSize={6} align="center">
			<Col col={2}>
				<Link to={PathsEnum.Main}>
					<Image src={Logo} alt="logo" />
				</Link>
			</Col>
			<Col col={4}>
				<Flex align="center" justify="flex-end">
					<Navigation />
					<LanguageSwitcher
						options={options}
						mx={isLg ? '3rem' : '1rem'}
					/>
					<SocialLinksContainer>
						{socials.map((social) => (
							<a
								key={social.alt}
								target="_blank"
								href={social.href}
								rel="noreferrer"
							>
								<Image
									alt={social.alt}
									src={social.thumbnail}
								/>
							</a>
						))}
					</SocialLinksContainer>
				</Flex>
			</Col>
		</Grid>
	);
};

export default ContentDesktop;
