import {
	CardContainer,
	ContentContainer,
	SkeletonContent,
	SkeletonText,
	TextContainer,
} from 'src/common/layout/Card/Card.styles';
import { Typography } from 'src/common/layout/Typography.styles';
import { cutStr } from 'src/common/utils/helpers/cutStr';

const CardSkeleton = () => {
	return (
		<CardContainer>
			<ContentContainer>
				<SkeletonContent />
				<TextContainer>
					<SkeletonText />
					<SkeletonText />
				</TextContainer>
			</ContentContainer>
		</CardContainer>
	);
};

export default CardSkeleton;
