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

import ChevronLeft from 'assets/icons/labels/chevron-left-solid.svg';
import ChevronRight from 'assets/icons/labels/chevron-right-solid.svg';

interface CarouselProps extends Omit<UseCarouselProps, 'transitionDuration'> {
	children: ReactNode[];
	transitionDuration?: number;
}

const Carousel = ({
	children,
	transitionDuration = 200,
	...props
}: CarouselProps) => {
	const {
		containerRef,
		setSlide,
		moveToRight,
		moveToLeft,
		handleTouchMove,
		handleTouchEnd,
		handleTouchStart,
		isTransition,
		containerWidth,
		offset,
		slides,
		controlsCount,
		activeControl,
	} = useCarousel({
		children,
		transitionDuration,
		...props,
	});
	const slidesList = slides.map((slide, i) => (
		<Slide key={i} style={{ width: containerWidth }}>
			{slide}
		</Slide>
	));

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
					transform: `translateX(-${offset}px)`,
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
				<Button onClick={moveToLeft} icon>
					<Image src={ChevronLeft} />
				</Button>
			</BtnContainer>
			<BtnContainer variant="right">
				<Button onClick={moveToRight} icon>
					<Image src={ChevronRight} />
				</Button>
			</BtnContainer>
		</Window>
	);
};

export default Carousel;
