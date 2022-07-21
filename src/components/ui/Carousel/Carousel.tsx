import {
	SlideTruck,
	Slide,
	Window,
} from 'components/ui/Carousel/Carousel.styles';
import { Children, ReactNode } from 'react';
import Controls from 'components/ui/Controls/Controls';
import useCarousel, { UseCarouselProps } from 'hooks/useCarousel';

interface CarouselProps extends Omit<UseCarouselProps, 'slidesNumber'> {
	children: ReactNode[];
}

const Carousel = ({ children, ...props }: CarouselProps) => {
	const {
		containerRef,
		currentSlide,
		setCurrentSlide,
		handleTouchMove,
		handleTouchEnd,
		handleTouchStart,
		isTransition,
		pageWidth,
		offset,
		slides,
		clonesNum,
		activeControl,
	} = useCarousel({
		children,
		...props,
	});
	const view = slides.map((slide) => (
		<Slide style={{ width: pageWidth }}>{slide}</Slide>
	));

	return (
		<Window
			ref={containerRef}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
		>
			<SlideTruck
				transition={isTransition}
				slideWidth={pageWidth}
				slidesNumber={slides.length}
				style={{
					transform: `translateX(-${
						currentSlide * pageWidth + offset
					}px)`,
				}}
			>
				{view}
			</SlideTruck>
			<Controls
				mt="1rem"
				setSlide={setCurrentSlide}
				currentSlide={activeControl}
				slidesNumber={slides.length - clonesNum.head - clonesNum.tail}
			/>
		</Window>
	);
};

export default Carousel;
