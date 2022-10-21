import {
	LabelContainer,
	LabelContainerProps,
} from '@/common/layout/Label/Label.styles';
import { ILabel } from '@/common/types/Label';
import { Typography } from '@/common/layout/Typography.styles';
import Image from 'next/image';

type LabelProps = ILabel & LabelContainerProps;

const Label = ({ icon, text, small, ...props }: LabelProps) => {
	return (
		<LabelContainer small={small} {...props}>
			<Image {...icon} />
			<Typography variant={small ? 'h5' : 'h4'} uppercase bold>
				{text}
			</Typography>
		</LabelContainer>
	);
};

export default Label;
