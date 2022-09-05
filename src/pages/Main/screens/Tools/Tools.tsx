import { Typography } from 'components/_layout/Typography.styles';
import {
	ToolsContainer,
	ToolsLogosContainer,
} from 'pages/Main/screens/Tools/Tools.styles';

import { useLanguage } from 'hooks/useLanguage';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

import { ReactComponent as Metasploit } from 'assets/icons/logo/metasploit.svg';

const toolsLogos = [
	{ thumbnail: <Metasploit key={1} alt="metasploit logo" /> },
	{ thumbnail: <Metasploit key={2} alt="metasploit logo" /> },
	{ thumbnail: <Metasploit key={3} alt="metasploit logo" /> },
	{ thumbnail: <Metasploit key={4} alt="metasploit logo" /> },
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
				{toolsLogos.map((logo) => (
					<>{logo.thumbnail}</>
				))}
			</ToolsLogosContainer>
		</ToolsContainer>
	);
};

export default Tools;
