import { ReactNode } from 'react';

import {
	SlideTruck,
	Slide,
	Window,
	BtnContainer,
} from 'components/Carousel/Carousel.styles';
import Controls from 'components/ui/Controls/Controls';
import Button from 'components/ui/Button/Button';
import { Image } from 'components/layout/Image.styles';

import useCarousel, { UseCarouselProps } from 'hooks/carousel/useCarousel';

import ChevronLeft from 'assets/icons/arrows/chevron-left-solid.svg';
import ChevronRight from 'assets/icons/arrows/chevron-right-solid.svg';
import { useSwipe } from 'hooks/useSwipe';

interface CarouselProps {
	children: ReactNode[];
	transitionDuration?: number;
	threshold?: number;
}

const Carousel = ({
	children,
	threshold = 0.2,
	transitionDuration = 200,
}: CarouselProps) => {
	const {
		containerRef,
		setSlide,
		moveToRight,
		moveToLeft,
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
			leftSwipeCallback: moveToLeft,
			rightSwipeCallback: moveToRight,
		});

	const slidesList = slides.map((slide, i) => (
		<Slide style={{ width: containerWidth }} key={i}>
			{slide}
		</Slide>
	));

	// style={{ width: containerWidth }}
	console.log(containerWidth);

	return (
		<Window
			ref={containerRef}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
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
			<Controls
				mt="1rem"
				onClick={setSlide}
				activeControl={activeControl}
				totalControls={controlsCount}
			/>
			<BtnContainer variant="left">
				<Button disabled={!isTransition} onClick={moveToLeft} icon>
					<Image src={ChevronLeft} />
				</Button>
			</BtnContainer>
			<BtnContainer variant="right">
				<Button disabled={!isTransition} onClick={moveToRight} icon>
					<Image src={ChevronRight} />
				</Button>
			</BtnContainer>
		</Window>
	);
};

export default Carousel;
