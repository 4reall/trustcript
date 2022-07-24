import {
	Children,
	cloneElement,
	isValidElement,
	ReactNode,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { useSwipe } from 'hooks/carousel/useSwipe';

export interface UseCarouselProps {
	transitionDuration: number;
	threshold?: number;
	autoplay?: boolean;
	interval?: number;
	infinite?: boolean;
	children: ReactNode[];
}

const useCarousel = ({
	threshold = 0.2,
	autoplay,
	interval = 5000,
	infinite,
	transitionDuration,
	children,
}: UseCarouselProps) => {
	const [offset, setOffset] = useState(0);
	const [containerWidth, setContainerWidth] = useState(450);
	const [isTransition, setIsTransition] = useState(true);
	const [slides, setSlides] = useState<ReactNode[]>(children);
	const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 });
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	const autoplayIntervalRef = useRef<NodeJS.Timer>();
	const timeoutRef = useRef<NodeJS.Timer>();
	const containerRef = useRef<HTMLDivElement>(null);

	const setSlide = (slideIndex: number) => {
		setOffset(containerWidth * (slideIndex + clonesCount.head));
	};

	const moveToLeft = () => setOffset((offset) => offset - containerWidth);

	const moveToRight = () => setOffset((offset) => offset + containerWidth);

	const { swipeShift, handleTouchStart, handleTouchMove, handleTouchEnd } =
		useSwipe({
			threshold,
			containerWidth: containerWidth,
			leftSwipeCallback: moveToLeft,
			rightSwipeCallback: moveToRight,
		});

	useEffect(() => {
		const firstChild = children[0];
		const lastChild = children[Children.count(children) - 1];

		if (!isValidElement(firstChild) || !isValidElement(lastChild)) {
			return;
		}

		setSlides([
			cloneElement(lastChild),
			...children,
			cloneElement(firstChild),
		]);

		setClonesCount({ head: 1, tail: 1 });
		return;
	}, [children, infinite]);

	useEffect(() => {
		const resizeHandler = () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);

			const width = containerRef.current?.offsetWidth;

			if (!width) return;

			setContainerWidth(width);
			setOffset(clonesCount.head * containerWidth);
		};

		resizeHandler();

		window.addEventListener('resize', resizeHandler);

		return () => window.removeEventListener('resize', resizeHandler);
	}, [clonesCount, containerWidth]);

	useEffect(() => {
		if (!isTransition) {
			setTimeout(() => setIsTransition(true), transitionDuration);
		}
	}, [isTransition]);

	useLayoutEffect(() => {
		if (offset === 0) {
			timeoutRef.current = setTimeout(() => {
				setIsTransition(false);
				setCurrentSlideIndex(0);
				setOffset(
					(slides.length - 1 - clonesCount.tail) * containerWidth
				);
			}, transitionDuration);
			return;
		}
		if (offset === (slides.length - 1) * containerWidth) {
			timeoutRef.current = setTimeout(() => {
				setIsTransition(false);
				setCurrentSlideIndex(
					slides.length - 1 - clonesCount.head - clonesCount.tail
				);
				setOffset(clonesCount.head * containerWidth);
			}, transitionDuration);
			return;
		}
		setCurrentSlideIndex(offset / containerWidth - clonesCount.head);
	}, [infinite, offset, slides, containerWidth, clonesCount]);

	useEffect(() => {
		if (autoplay) {
			autoplayIntervalRef.current = setInterval(
				() => setOffset((offset) => offset + containerWidth),
				interval
			);
		}
		return () => {
			if (autoplayIntervalRef.current)
				clearInterval(autoplayIntervalRef.current);
		};
	}, [offset]);

	return {
		containerRef,
		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,
		moveToLeft,
		moveToRight,
		isTransition,
		containerWidth,
		offset: offset + swipeShift,
		slides,
		setSlide,
		controlsCount: slides.length - clonesCount.head - clonesCount.tail,
		activeControl: Math.max(currentSlideIndex, 0),
	};
};

export default useCarousel;
