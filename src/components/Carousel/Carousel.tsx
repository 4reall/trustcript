import { Inner, Slide, Slider } from 'components/Carousel/Carousel.styles';
import { useRef, useState, TouchEvent, MouseEvent, useEffect } from 'react';
import Controls from 'components/Carousel/components/Controls';

const THRESHOLD = 0.05;

const Carousel = () => {
	const [offset, setOffset] = useState(0);
	const [pageWidth, setPageWidth] = useState(450);
	const [transition, setTransition] = useState(true);
	const [slideIndex, setSlideIndex] = useState(0);
	const xInitRef = useRef(0);
	const xCurrRef = useRef(0);
	const windowElementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const resizeHandler = () => {
			const width = windowElementRef.current?.offsetWidth;
			setPageWidth(width ? width : 450);
			setOffset(0);
		};
		resizeHandler();
		window.addEventListener('resize', resizeHandler);

		return () => window.removeEventListener('resize', resizeHandler);
	}, []);

	const moveToCurrent = () => {
		console.log('curr');
		setOffset(0);
	};

	const moveToLeft = () => {
		console.log('left');
		if (slideIndex === 0) setSlideIndex(2);
		else setSlideIndex((state) => state - 1);
		setOffset(0);
	};

	const moveToRight = () => {
		console.log('right');
		if (slideIndex === 2) setSlideIndex(0);
		else setSlideIndex((state) => state + 1);
		setOffset(0);
	};

	const handleTouchStart = (e: TouchEvent) => {
		setTransition(false);
		xInitRef.current = e.touches[0].clientX;
		xCurrRef.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: TouchEvent) => {
		xCurrRef.current = e.changedTouches[0].clientX;
		setOffset(xInitRef.current - e.changedTouches[0].clientX);
	};

	const handleTouchEnd = (e: TouchEvent) => {
		setTransition(true);
		console.log('init', xInitRef.current);
		console.log('curr', xCurrRef.current);

		const diff = xInitRef.current - xCurrRef.current;

		if (pageWidth * THRESHOLD < Math.abs(diff)) {
			diff < 0 ? moveToLeft() : moveToRight();
		} else {
			moveToCurrent();
		}
	};

	return (
		<Slider
			ref={windowElementRef}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
		>
			<Inner
				transition={transition}
				slideWidth={pageWidth}
				slidesNumber={3}
				style={{
					transform: `translateX(-${
						slideIndex * pageWidth + offset
					}px)`,
				}}
			>
				<Slide />
				<Slide />
				<Slide />
			</Inner>
			<Controls />
		</Slider>
	);
};

export default Carousel;
