import {
	CardContainer,
	ContentContainer,
	LabelsContainer,
	TextContainer,
} from '@/common/layout/Card/Card.styles';
import Label from '@/common/layout/Label/Label';
import { IArticle } from '@/common/types/Article';

import ViewsIcon from '@/assets/icons/labels/views.svg';
import DateIcon from '@/assets/icons/labels/date.svg';
import useMediaQuery from '@/common/hooks/breakpoints/useMediaQuery';
import { queries } from '@/common/utils/constants/mediaQueries';
import { Typography } from '@/common/layout/Typography.styles';
import { cutStr } from '@/common/utils/helpers/cutStr';
import { convertViews } from '@/common/utils/helpers/converViews';
import Image from 'next/image';
import Link from 'next/link';
import { PathsEnum } from '@/common/utils/constants/paths';

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
			<Link href={`${PathsEnum.Blog}/${id}`}>
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
