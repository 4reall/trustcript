import Image from 'next/image';

import { Typography } from '@/common/layout/Typography.styles';
import {
	ToolsContainer,
	ToolsLogosContainer,
} from '@/modules/Home/components/Tools/Tools.styles';
import Metasploit from '@/assets/icons/metasploit.svg';
import { useTranslations } from 'next-intl';

const logos = [
	{ src: Metasploit, alt: 'metasploit logo' },
	{ src: Metasploit, alt: 'metasploit logo' },
	{ src: Metasploit, alt: 'metasploit logo' },
	{ src: Metasploit, alt: 'metasploit logo' },
];

interface ToolsProps {
	big: boolean;
}

const Tools = ({ big }: ToolsProps) => {
	const t = useTranslations('tools');
	return (
		<ToolsContainer>
			<Typography variant={big ? 'h2' : 'h3'} bold>
				{t('title')}
			</Typography>
			<Typography
				m={[big ? '2rem' : '1rem', 0, 0, 0]}
				variant={big ? 'h3' : 'h4'}
			>
				{t('text')}
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
