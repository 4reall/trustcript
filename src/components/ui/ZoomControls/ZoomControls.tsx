import {
	ZoomControlsContainer,
	ZoomControlsContainerProps,
	ZoomControlsMinus,
	ZoomControlsPlus,
} from 'components/ui/ZoomControls/ZoomControls.styles';
import Ripple from 'components/Ripple/Ripple';

interface ZoomControlsProps extends ZoomControlsContainerProps {
	handleMinusClick: () => void;
	handlePlusClick: () => void;
}

const ZoomControls = ({
	handleMinusClick,
	handlePlusClick,
	...props
}: ZoomControlsProps) => {
	return (
		<ZoomControlsContainer {...props}>
			<ZoomControlsPlus onClick={handlePlusClick}>
				<Ripple duration={1000} color="white" />
			</ZoomControlsPlus>
			<ZoomControlsMinus onClick={handleMinusClick}>
				<Ripple duration={1000} color="white" />
			</ZoomControlsMinus>
		</ZoomControlsContainer>
	);
};

export default ZoomControls;
