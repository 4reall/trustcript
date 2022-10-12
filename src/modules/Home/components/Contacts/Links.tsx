import Image from 'next/image';
import {
	Link,
	LinksContainer,
} from '@/modules/Home/components/Contacts/Contacts.styles';
import { Typography } from '@/layout/Typography.styles';
import { ILink } from '@/modules/Home/types/Link';

interface LinksProps {
	links: ILink[];
}

const Links = ({ links }: LinksProps) => {
	return (
		<LinksContainer>
			{links.map(({ text, src, href }, i) => (
				<Link target="_blank" key={i} href={href} rel="noreferrer">
					<Image src={src} alt={'link ' + text} />
					<Typography variant="h4"> {text}</Typography>
				</Link>
			))}
		</LinksContainer>
	);
};

export default Links;
