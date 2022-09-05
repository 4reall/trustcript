import {
	ControlsBtn,
	ControlsContainer,
	ControlsContainerProps,
} from 'components/_ui/Controls/Controls.styles';
import { CarouselControls } from 'components/Carousel/Carousel';

type ControlsProps = CarouselControls & ControlsContainerProps;

const Controls = ({
	totalControls,
	activeControl,
	onClick,
	...props
}: ControlsProps) => {
	return (
		<ControlsContainer {...props}>
			{new Array(totalControls).fill('').map((_, i) => (
				<ControlsBtn
					key={i}
					onClick={() => onClick(i)}
					active={activeControl === i}
				/>
			))}
		</ControlsContainer>
	);
};

export default Controls;
