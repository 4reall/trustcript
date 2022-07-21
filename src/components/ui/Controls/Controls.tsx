import {
	ControlsBtn,
	ControlsContainer,
	ControlsContainerProps,
} from 'components/ui/Controls/Controls.styled';
import { Dispatch, SetStateAction, useRef } from 'react';

interface ControlsProps extends ControlsContainerProps {
	slidesNumber: number;
	currentSlide: number;
	setSlide: Dispatch<SetStateAction<number>>;
}

const Controls = ({
	slidesNumber,
	currentSlide,
	setSlide,
	...props
}: ControlsProps) => {
	const emptyArrRef = useRef(new Array(slidesNumber).fill(''));

	const handleClick = (index: number) => {
		return () => setSlide(index);
	};

	return (
		<ControlsContainer {...props}>
			{emptyArrRef.current.map((_, i) => (
				<ControlsBtn
					key={i}
					onClick={handleClick(i)}
					active={currentSlide === i && true}
				/>
			))}
		</ControlsContainer>
	);
};

export default Controls;
