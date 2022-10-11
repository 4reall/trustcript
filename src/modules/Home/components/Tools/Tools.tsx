import Image from 'next/image';

import { Typography } from '@/layout/Typography.styles';
import {
	ToolsContainer,
	ToolsLogosContainer,
} from '@/modules/Home/components/Tools/Tools.styles';

import { useLanguage } from '@/hooks/useLanguage';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';

import Metasploit from '@/assets/icons/metasploit.svg';

const toolsLogos = [
	{ thumbnail: <Image src={Metasploit} key={1} alt="metasploit logo" /> },
	{ thumbnail: <Image src={Metasploit} key={2} alt="metasploit logo" /> },
	{ thumbnail: <Image src={Metasploit} key={3} alt="metasploit logo" /> },
	{ thumbnail: <Image src={Metasploit} key={4} alt="metasploit logo" /> },
];

const Tools = () => {
	const { text } = useLanguage('tools');
	const isLg = useMediaQuery(queries.up.lg);

	return (
		<ToolsContainer>
			<Typography variant={isLg ? 'h2' : 'h3'} bold>
				{text('title')}
			</Typography>
			<Typography
				m={[isLg ? '2rem' : '1rem', 0, 0, 0]}
				variant={isLg ? 'h3' : 'h4'}
			>
				{text('text')}
			</Typography>
			<ToolsLogosContainer>
				{toolsLogos.map((logo) => logo.thumbnail)}
			</ToolsLogosContainer>
		</ToolsContainer>
	);
};

export default Tools;
