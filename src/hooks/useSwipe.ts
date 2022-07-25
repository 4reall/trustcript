import { TouchEvent, MouseEvent, useRef, useState } from 'react';

interface UseSwipeProps {
	containerWidth: number;
	threshold: number;
	leftSwipeCallback?: (swipeShit?: number) => void;
	rightSwipeCallback?: (swipeShit?: number) => void;
}

export const useSwipe = ({
	containerWidth,
	threshold,
	leftSwipeCallback = () => {},
	rightSwipeCallback = () => {},
}: UseSwipeProps) => {
	const [swipeShift, setSwipeShift] = useState(0);
	const xInitRef = useRef(0);
	const xCurrRef = useRef(0);

	const shortSwipe = () => {
		setSwipeShift(0);
	};

	const leftSwipe = () => {
		leftSwipeCallback(swipeShift);
		setSwipeShift(0);
	};

	const rightSwipe = () => {
		rightSwipeCallback(swipeShift);
		setSwipeShift(0);
	};

	const handleTouchStart = (e: TouchEvent) => {
		xInitRef.current = e.touches[0].clientX;
		xCurrRef.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: TouchEvent) => {
		xCurrRef.current = e.changedTouches[0].clientX;
		setSwipeShift(xInitRef.current - e.changedTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		const diff = xInitRef.current - xCurrRef.current;

		if (containerWidth * threshold < Math.abs(diff)) {
			diff < 0 ? leftSwipe() : rightSwipe();
		} else {
			shortSwipe();
		}
	};

	return {
		swipeShift,
		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,
	};
};
