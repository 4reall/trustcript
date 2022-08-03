import {
	Children,
	cloneElement,
	isValidElement,
	ReactNode,
	useCallback,
	useEffect,
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
	const [containerWidth, setContainerWidth] = useState(0);
	const [isTransition, setIsTransition] = useState(false);
	const [slides, setSlides] = useState<ReactNode[]>(children);
	const [clonesCount, setClonesCount] = useState({ head: 1, tail: 1 });
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	const timeoutRef = useRef<NodeJS.Timer>();

	const containerRef = useResize(
		useCallback(
			(width) => {
				if (timeoutRef.current) clearTimeout(timeoutRef.current);
				setContainerWidth(width);

				setOffset(clonesCount.head * width);
			},
			// eslint-disable-next-line
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
	}, [children]);

	useEffect(() => {
		if (!isTransition) {
			setTimeout(() => setIsTransition(true), transitionDuration);
		}
	}, [isTransition, transitionDuration]);

	useEffect(() => {
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
		controlsCount: Math.max(
			slides.length - clonesCount.head - clonesCount.tail,
			children.length
		),
		activeControl: Math.max(currentSlideIndex, 0),
	};
};

export default useCarousel;
