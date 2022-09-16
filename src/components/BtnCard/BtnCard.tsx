import { IImage } from 'types/Image';
import { Typography } from 'components/_layout/Typography.styles';
import Button from 'components/_ui/Button/Button';
import { Img } from 'components/_layout/Img.styles';
import { cutStr } from 'utils/helpers/cutStr';
import {
	CardContainer,
	ImgContainer,
	TextContainer,
} from 'components/BtnCard/BtnCard.styles';
import Label from 'components/_layout/Label/Label';
import { ReactComponent as ViewsIcon } from 'assets/icons/labels/views.svg';
import { convertViews } from 'utils/helpers/converViews';
import { ReactNode } from 'react';
import { ArticleFiltersEnum } from 'utils/constants/filters';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

export interface SimilarCardProps {
	image: IImage;
	title: string;
	description: string;
	buttonText: string;
	onClick: () => void;
	small?: boolean;
	labels?: {
		categoryIcon: ReactNode;
		category: ArticleFiltersEnum;
		views: number;
	};
}

const BtnCard = ({
	image,
	buttonText,
	description,
	title,
	onClick,
	small,
	labels,
}: SimilarCardProps) => {
	const isLg = useMediaQuery(queries.up.lg);

	return (
		<CardContainer>
			<ImgContainer>
				{labels && (
					<>
						<Label
							position={{ left: 10, top: isLg ? 15 : 10 }}
							icon={labels.categoryIcon}
							text={labels.category}
							small
						/>
						<Label
							position={{
								left: 10,
								bottom: isLg ? 15 : 10,
							}}
							icon={<ViewsIcon />}
							text={convertViews(labels.views)}
							dark
							small
						/>
					</>
				)}
				<Img {...image} />
			</ImgContainer>
			<TextContainer>
				<Typography as="h3" variant={small ? 'h4' : 'h3'} bold>
					{title}
				</Typography>
				<Typography
					mt="1rem"
					mb="1rem"
					as="p"
					variant={small ? 'h5' : 'h4'}
				>
					{cutStr(description, 100)}
				</Typography>
				<Button onClick={onClick} outlined small={small}>
					{buttonText}
				</Button>
			</TextContainer>
		</CardContainer>
	);
};

export default BtnCard;
