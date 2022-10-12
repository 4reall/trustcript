import Image from 'next/image';

import { Typography } from '@/layout/Typography.styles';
import {
	ToolsContainer,
	ToolsLogosContainer,
} from '@/modules/Home/components/Tools/Tools.styles';
import Metasploit from '@/assets/icons/metasploit.svg';

const logos = [
	{ src: Metasploit, alt: 'metasploit logo' },
	{ src: Metasploit, alt: 'metasploit logo' },
	{ src: Metasploit, alt: 'metasploit logo' },
	{ src: Metasploit, alt: 'metasploit logo' },
];

interface ToolsProps {
	title: string;
	text: string;
	big: boolean;
}

const Tools = ({ title, text, big }: ToolsProps) => {
	return (
		<ToolsContainer>
			<Typography variant={big ? 'h2' : 'h3'} bold>
				{title}
			</Typography>
			<Typography
				m={[big ? '2rem' : '1rem', 0, 0, 0]}
				variant={big ? 'h3' : 'h4'}
			>
				{text}
			</Typography>
			<ToolsLogosContainer>
				{logos.map((logo, i) => (
					<Image {...logo} key={i} />
				))}
			</ToolsLogosContainer>
		</ToolsContainer>
	);
};

export default Tools;
