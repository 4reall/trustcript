import {
	Children,
	cloneElement,
	isValidElement,
	ReactNode,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { useResize } from 'hooks/useResize';

export interface UseCarouselProps {
	transitionDuration: number;
	children: ReactNode[];
}

const useCarousel = ({ transitionDuration, children }: UseCarouselProps) => {
	const [offset, setOffset] = useState(0);
	const [containerWidth, setContainerWidth] = useState(450);
	const [isTransition, setIsTransition] = useState(true);
	const [slides, setSlides] = useState<ReactNode[]>(children);
	const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 });
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	const timeoutRef = useRef<NodeJS.Timer>();
	const firstRender = useRef(true);

	const containerRef = useResize(
		useCallback(
			(width) => {
				if (timeoutRef.current) clearTimeout(timeoutRef.current);
				setContainerWidth(width);
				setOffset(clonesCount.head * containerWidth);
			},
			[clonesCount, containerWidth]
		)
	);

	const setSlide = (slideIndex: number) => {
		setOffset(containerWidth * (slideIndex + clonesCount.head));
	};

	const moveToLeft = () => setOffset((offset) => offset - containerWidth);

	const moveToRight = () => setOffset((offset) => offset + containerWidth);

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
		if (firstRender.current) firstRender.current = false;
		return;
	}, [children]);

	useEffect(() => {
		if (!isTransition) {
			setTimeout(() => setIsTransition(true), transitionDuration);
		}
	}, [isTransition]);

	useLayoutEffect(() => {
		if (firstRender.current) return;
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
	}, [offset, slides, containerWidth, clonesCount, transitionDuration]);

	return {
		containerRef,
		moveToLeft,
		moveToRight,
		isTransition,
		containerWidth,
		offset: offset,
		slides,
		setSlide,
		controlsCount: slides.length - clonesCount.head - clonesCount.tail,
		activeControl: currentSlideIndex,
	};
};

export default useCarousel;
