import {
	CardContainer,
	ContentContainer,
	LabelsContainer,
	TextContainer,
} from 'src/common/layout/Card/Card.styles';
import Label from 'src/common/layout/Label/Label';
import { IArticle } from 'src/common/types/Article';

import ViewsIcon from 'public/assets/icons/labels/views.svg';
import DateIcon from 'public/assets/icons/labels/date.svg';
import useMediaQuery from 'src/common/hooks/breakpoints/useMediaQuery';
import { queries } from 'src/common/utils/constants/mediaQueries';
import { Typography } from 'src/common/layout/Typography.styles';
import { cutStr } from 'src/common/utils/helpers/cutStr';
import { convertViews } from 'src/common/utils/helpers/converViews';
import Image from 'next/image';
import Link from 'next/link';
import { PathsEnum } from 'src/common/utils/constants/paths';

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
