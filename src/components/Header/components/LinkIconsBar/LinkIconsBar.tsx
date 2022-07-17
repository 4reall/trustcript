import { Wrapper } from './LinkIconsBar.styles';
import { Image } from 'components/layout/Image.styles';

export interface IconLink {
	href: string;
	alt: string;
	image: string;
}

interface IconLinksBarProps {
	iconLinks: IconLink[];
}

const IconLinksBar = ({ iconLinks }: IconLinksBarProps) => {
	return (
		<Wrapper>
			{iconLinks.map((iconLink) => (
				<a target="_blank" href={iconLink.href}>
					<Image alt={iconLink.alt} src={iconLink.image} />
				</a>
			))}
		</Wrapper>
	);
};

export default IconLinksBar;
