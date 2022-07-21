import {
	Children,
	cloneElement,
	isValidElement,
	ReactNode,
	TouchEvent,
	useEffect,
	useRef,
	useState,
} from 'react';

export interface UseCarouselProps {
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
	children,
}: UseCarouselProps) => {
	const [offset, setOffset] = useState(0);
	const [pageWidth, setPageWidth] = useState(450);
	const [isTransition, setIsTransition] = useState(true);
	const [currentSlide, setCurrentSlide] = useState(0);
	const xInitRef = useRef(0);
	const xCurrRef = useRef(0);
	const autoplayIntervalRef = useRef<NodeJS.Timer>();
	const containerRef = useRef<HTMLDivElement>(null);
	const [slides, setSlides] = useState(children);
	const [clonesNum, setClonesNum] = useState({ head: 0, tail: 0 });
	const [activeControl, setActiveControl] = useState(0);

	const moveToCurrent = () => {
		setOffset(0);
	};

	const moveToLeft = () => {
		setCurrentSlide((state) => state - 1);
		setActiveControl(currentSlide - clonesNum.head);
		setOffset(0);
	};

	const moveToRight = () => {
		setCurrentSlide((state) => state + 1);
		setActiveControl(currentSlide - clonesNum.tail);
		setOffset(0);
	};

	useEffect(() => {
		if (!infinite) return;

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
		setClonesNum({ head: 1, tail: 1 });
	}, [children, infinite]);

	useEffect(() => {
		if (!infinite) return;

		if (currentSlide === 0) {
			setActiveControl(
				slides.length - 1 - clonesNum.tail - clonesNum.head
			);
			setTimeout(() => {
				setIsTransition(false);
				setCurrentSlide(slides.length - 1 - clonesNum.tail);
			}, 500);
			return;
		}
		if (currentSlide === slides.length - 1) {
			setActiveControl(0);
			setTimeout(() => {
				setIsTransition(false);
				setCurrentSlide(clonesNum.head);
			}, 500);
			return;
		}
		setActiveControl(currentSlide - clonesNum.tail);
	}, [infinite, currentSlide, slides, pageWidth]);

	useEffect(() => {
		if (autoplay) {
			autoplayIntervalRef.current = setInterval(moveToRight, interval);
		}
		return () => {
			if (autoplayIntervalRef.current)
				clearInterval(autoplayIntervalRef.current);
		};
	}, [currentSlide]);

	useEffect(() => {
		const resizeHandler = () => {
			const width = containerRef.current?.offsetWidth;
			setPageWidth(width ? width : 450);
			setCurrentSlide(clonesNum.head);
			setOffset(0);
		};
		resizeHandler();
		window.addEventListener('resize', resizeHandler);

		return () => window.removeEventListener('resize', resizeHandler);
	}, []);

	const handleTouchStart = (e: TouchEvent) => {
		setIsTransition(false);
		xInitRef.current = e.touches[0].clientX;
		xCurrRef.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: TouchEvent) => {
		xCurrRef.current = e.changedTouches[0].clientX;
		setOffset(xInitRef.current - e.changedTouches[0].clientX);
	};

	const handleTouchEnd = (e: TouchEvent) => {
		setIsTransition(true);

		const diff = xInitRef.current - xCurrRef.current;

		if (pageWidth * threshold < Math.abs(diff)) {
			diff < 0 ? moveToLeft() : moveToRight();
		} else {
			moveToCurrent();
		}
	};

	return {
		containerRef,
		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,
		isTransition,
		pageWidth,
		offset,
		currentSlide,
		setCurrentSlide,
		slides,
		clonesNum,
		activeControl,
	};
};

export default useCarousel;
