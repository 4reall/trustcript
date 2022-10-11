import {
	LabelContainer,
	LabelContainerProps,
} from '@/components/Label/Label.styles';
import { ILabel } from '@/types/Label';
import { Typography } from '@/layout/Typography.styles';
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
