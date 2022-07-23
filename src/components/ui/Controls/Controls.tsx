import {
	ControlsBtn,
	ControlsContainer,
	ControlsContainerProps,
} from 'components/ui/Controls/Controls.styled';

interface ControlsProps extends ControlsContainerProps {
	totalControls: number;
	activeControl: number;
	onClick: (index: number) => void;
}

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
