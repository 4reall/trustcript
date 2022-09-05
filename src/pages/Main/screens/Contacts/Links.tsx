import {
	Link,
	LinksContainer,
} from 'pages/Main/screens/Contacts/Contacts.styles';
import { Typography } from 'components/_layout/Typography.styles';
import { Img } from 'components/_layout/Img.styles';

export interface ILink {
	href: string;
	src: string;
	text: string;
}

interface LinksProps {
	links: ILink[];
}

const Links = ({ links }: LinksProps) => {
	return (
		<LinksContainer>
			{links.map(({ text, src, href }, i) => (
				<Link target="_blank" key={i} href={href} rel="noreferrer">
					<Img src={src} alt={'link ' + text} />
					<Typography variant="h4"> {text}</Typography>
				</Link>
			))}
		</LinksContainer>
	);
};

export default Links;
