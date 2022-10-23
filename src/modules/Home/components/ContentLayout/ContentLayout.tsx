import { ReactNode } from 'react';
import { Container } from 'src/modules/Home/components/ContentLayout/ContentLayout.styles';
import { Typography } from 'src/common/layout/Typography.styles';
import { Section, SectionProps } from 'src/common/layout/Section.styles';

interface ContentLayoutProps extends SectionProps {
	title: string;
	text: string;
	big?: boolean;
	button?: ReactNode;
	content: ReactNode;
}

const ContentLayout = ({
	content,
	text,
	title,
	button,
	big,
	direction = 'row',
	...props
}: ContentLayoutProps) => {
	return (
		<Section direction={direction} {...props}>
			<Container
				w={big ? 1 / 2 : 1}
				p={[
					direction === 'column-reverse' ? '2rem' : 0,
					direction === 'row' ? '2rem' : 0,
					direction === 'column' ? '2rem' : 0,
					direction === 'row-reverse' ? '2rem' : 0,
				]}
			>
				<Typography as="h2" variant={big ? 'h2' : 'h3'} bold>
					{title}
				</Typography>
				<Typography
					m={['1rem', 0, '1rem', 0]}
					as="p"
					variant={big ? 'h3' : 'h4'}
				>
					{text}
				</Typography>
				{button}
			</Container>
			<Container w={big ? 1 / 2 : 1}>{content}</Container>
		</Section>
	);
};

export default ContentLayout;
