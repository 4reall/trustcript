import {
	CardContainer,
	ContentContainer,
	LabelsContainer,
	TextContainer,
} from '@/components/Card/Card.styles';
import Label from '@/components/Label/Label';
import { IArticle } from '@/types/Article';

import ViewsIcon from '@/assets/icons/labels/views.svg';
import DateIcon from '@/assets/icons/labels/date.svg';
import useMediaQuery from '@/hooks/breakpoints/useMediaQuery';
import { queries } from '@/utils/constants/mediaQueries';
import { Typography } from '@/layout/Typography.styles';
import { cutStr } from '@/utils/helpers/cutStr';
import { convertViews } from '@/utils/helpers/converViews';
import Link from '@/components/Link/Link';
import Image from 'next/image';

const ArticleCard = ({
	categoryIcon,
	category,
	views,
	date,
	image,
	title,
	description,
	id,
}: IArticle) => {
	const isLg = useMediaQuery(queries.up.lg);

	return (
		<CardContainer>
			<Link href={`${id}`}>
				<ContentContainer>
					<LabelsContainer>
						<Label
							position={{ left: 10, top: isLg ? 15 : 10 }}
							icon={categoryIcon}
							text={category}
							small={!isLg}
						/>
						<Label
							position={{
								left: 10,
								bottom: isLg ? 15 : 10,
							}}
							icon={ViewsIcon}
							text={convertViews(views)}
							dark
							small={!isLg}
						/>
						<Label
							position={{
								bottom: isLg ? 15 : 10,
								left: isLg ? 110 : 95,
							}}
							icon={DateIcon}
							text={date}
							dark
							small={!isLg}
						/>
						<Image {...image} />
					</LabelsContainer>
					<TextContainer>
						<Typography m={['1rem', 0, 0, 0]} variant="h3">
							{title}
						</Typography>
						<Typography m={['1rem', 0, 0, 0]} variant="h4">
							{cutStr(description, 200)}
						</Typography>
					</TextContainer>
				</ContentContainer>
			</Link>
		</CardContainer>
	);
};

export default ArticleCard;
