import { IImage } from 'types/Image';
import { Typography } from 'components/layout/Typography.styles';
import Button from 'components/ui/Button/Button';
import { Img } from 'components/layout/Img.styles';
import { cutStr } from 'utils/helpers/cutStr';
import {
	CardContainer,
	ImgContainer,
	TextContainer,
} from 'components/cards/BtnCard/BtnCard.styles';

export interface SimilarCardProps {
	image: IImage;
	title: string;
	description: string;
	buttonText: string;
	onClick: () => void;
	small?: boolean;
}

const BtnCard = ({
	image,
	buttonText,
	description,
	title,
	onClick,
	small,
}: SimilarCardProps) => {
	return (
		<CardContainer>
			<ImgContainer>
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
