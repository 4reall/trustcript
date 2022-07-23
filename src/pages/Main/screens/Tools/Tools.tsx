import { Typography } from 'components/layout/Typography.styles';
import {
	ToolsContainer,
	ToolsLogosContainer,
} from 'pages/Main/screens/Tools/Tools.styles';
import { Image } from 'components/layout/Image.styles';
import Metasploit from 'assets/icons/logo/metasploit.svg';
import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

const toolsLogos = [
	{ src: Metasploit, alt: 'metasploit logo' },
	{ src: Metasploit, alt: 'metasploit logo' },
	{ src: Metasploit, alt: 'metasploit logo' },
	{ src: Metasploit, alt: 'metasploit logo' },
];

const Tools = () => {
	const { text } = useLanguage('tools');
	const isMd = useMediaQuery(queries.up.md);
	return (
		<ToolsContainer>
			<Typography variant={isMd ? 'h2' : 'h3'} bold>
				{text('title')}
			</Typography>
			<Typography
				mt={isMd ? '2rem' : '1rem'}
				variant={isMd ? 'h3' : 'h4'}
			>
				{text('text')}
			</Typography>
			<ToolsLogosContainer>
				{toolsLogos.map((logo, i) => (
					<Image key={i} {...logo} />
				))}
			</ToolsLogosContainer>
		</ToolsContainer>
	);
};

export default Tools;
