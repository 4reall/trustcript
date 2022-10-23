import { IImage } from 'src/common/types/Image';
import { Typography } from 'src/common/layout/Typography.styles';
import Button from 'src/common/components/_ui/Button/Button';
import { cutStr } from 'src/common/utils/helpers/cutStr';
import {
	CardContainer,
	ImgContainer,
	TextContainer,
} from 'src/common/layout/BtnCard/BtnCard.styles';
import { ReactComponent as ViewsIcon } from 'public/assets/icons/labels/views.svg';
import { convertViews } from 'src/common/utils/helpers/converViews';
import { ArticleFiltersEnum } from 'src/common/utils/constants/filters';
import useMediaQuery from 'src/common/hooks/breakpoints/useMediaQuery';
import { queries } from 'src/common/utils/constants/mediaQueries';
import Image from 'next/image';
import Label from 'src/common/layout/Label/Label';

export interface SimilarCardProps {
	image: IImage;
	title: string;
	description: string;
	buttonText: string;
	onClick: () => void;
	small?: boolean;
	labels?: {
		categoryIcon: IImage;
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
							icon={{ src: ViewsIcon, alt: 'view icons' }}
							text={convertViews(labels.views)}
							dark
							small
						/>
					</>
				)}
				<Image {...image} height={200} width={460} />
			</ImgContainer>
			<TextContainer>
				<Typography as="h3" variant={small ? 'h4' : 'h3'} bold>
					{title}
				</Typography>
				<Typography
					m={['1rem', 0, '1rem', 0]}
					as="p"
					variant={small ? 'h5' : 'h4'}
				>
					{cutStr(description, 100)}
				</Typography>
				<Button onClick={onClick} outline small={small}>
					{buttonText}
				</Button>
			</TextContainer>
		</CardContainer>
	);
};

export default BtnCard;
