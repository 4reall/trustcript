import { ReactNode, SyntheticEvent } from 'react';

import {
	SlideTruck,
	Slide,
	Window,
	BtnContainer,
} from 'components/Carousel/Carousel.styles';
import Button from 'components/_ui/Button/Button';

import useCarousel from 'hooks/useCarousel';
import { useSwipe } from 'hooks/useSwipe';

import { ReactComponent as ChevronLeft } from 'assets/icons/arrows/chevron-left-solid.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/arrows/chevron-right-solid.svg';

export interface CarouselControls {
	totalControls: number;
	activeControl: number;
	onClick: (index: number) => void;
	moveToLeft: () => void;
	moveToRight: () => void;
	disabled?: boolean;
}

interface CarouselProps {
	children: ReactNode[];
	transitionDuration?: number;
	threshold?: number;
	controls: (props: CarouselControls) => JSX.Element;
	sideControls?: boolean;
	box?: boolean;
}

const Carousel = ({
	children,
	threshold = 0.2,
	transitionDuration = 200,
	controls,
	sideControls,
	box,
}: CarouselProps) => {
	const {
		containerRef,
		methods,
		isTransition,
		containerWidth,
		offset,
		slides,
		controlsCount,
		activeControl,
	} = useCarousel({
		children,
		transitionDuration,
	});

	const { swipeShift, handleTouchStart, handleTouchMove, handleTouchEnd } =
		useSwipe({
			threshold,
			containerWidth: containerWidth,
			leftSwipeCallback: methods.moveToLeft,
			rightSwipeCallback: methods.moveToRight,
		});

	const slidesList = slides.map((slide, i) => (
		<Slide
			style={{ width: containerWidth, height: box ? containerWidth : '' }}
			key={i}
		>
			{slide}
		</Slide>
	));

	return (
		<Window
			ref={containerRef}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
			onClick={(e: SyntheticEvent) => e.stopPropagation()}
		>
			<SlideTruck
				transitionDuration={transitionDuration}
				transition={isTransition}
				style={{
					transform: `translateX(-${offset + swipeShift}px)`,
				}}
			>
				{slidesList}
			</SlideTruck>
			{controls({
				disabled: !isTransition,
				onClick: methods.setSlide,
				activeControl: activeControl,
				totalControls: controlsCount,
				moveToLeft: methods.moveToLeft,
				moveToRight: methods.moveToRight,
			})}
			<BtnContainer show={sideControls} variant="left">
				<Button
					disabled={!isTransition}
					onClick={methods.moveToLeft}
					icon
				>
					<ChevronLeft alt={'move to left icon'} />
				</Button>
			</BtnContainer>
			<BtnContainer show={sideControls} variant="right">
				<Button
					disabled={!isTransition}
					onClick={methods.moveToRight}
					icon
				>
					<ChevronRight alt={'move to right icon'} />
				</Button>
			</BtnContainer>
		</Window>
	);
};

export default Carousel;
