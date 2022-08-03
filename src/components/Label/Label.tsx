import {
	LabelContainer,
	LabelContainerProps,
} from 'components/Label/Label.styles';
import { ILabel } from 'types/Label';
import { Typography } from 'components/layout/Typography.styles';
import useMediaQuery from 'hooks/breakpoints/useMediaQuery';
import { queries } from 'utils/constants/mediaQueries';

type LabelProps = ILabel & LabelContainerProps;

const Label = ({ icon, text, small, ...props }: LabelProps) => {
	return (
		<LabelContainer small={small} {...props}>
			{icon}
			<Typography variant={small ? 'h5' : 'h4'} uppercase bold>
				{text}
			</Typography>
		</LabelContainer>
	);
};

export default Label;
