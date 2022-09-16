import {
	CardContainer,
	ContentContainer,
	LabelsContainer,
	TextContainer,
} from 'components/Card/Card.styles';
import Label from 'components/_layout/Label/Label';
import { IArticle } from 'types/Article';

import { ReactComponent as ViewsIcon } from 'assets/icons/labels/views.svg';
import { ReactComponent as DateIcon } from 'assets/icons/labels/date.svg';
import { Img } from 'components/_layout/Img.styles';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';
import { Typography } from 'components/_layout/Typography.styles';
import { cutStr } from 'utils/helpers/cutStr';
import { Link } from 'react-router-dom';
import { PathsEnum } from 'utils/constants/paths';
import { convertViews } from 'utils/helpers/converViews';

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
			<Link to={`${id}`}>
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
							icon={<ViewsIcon />}
							text={convertViews(views)}
							dark
							small={!isLg}
						/>
						<Label
							position={{
								bottom: isLg ? 15 : 10,
								left: isLg ? 110 : 95,
							}}
							icon={<DateIcon />}
							text={date}
							dark
							small={!isLg}
						/>
						<Img {...image} />
					</LabelsContainer>
					<TextContainer>
						<Typography mt="1rem" variant="h3">
							{title}
						</Typography>
						<Typography mt="1rem" variant="h4">
							{cutStr(description, 200)}
						</Typography>
					</TextContainer>
				</ContentContainer>
			</Link>
		</CardContainer>
	);
};

export default ArticleCard;
