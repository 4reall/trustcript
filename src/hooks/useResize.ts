import { useEffect, useRef } from 'react';

export const useResize = (callback: (width: number) => void) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const resizeHandler = () => {
			const width = containerRef.current?.offsetWidth;

			if (!width) return;

			callback(width);
		};

		resizeHandler();

		window.addEventListener('resize', resizeHandler);

		return () => window.removeEventListener('resize', resizeHandler);
	}, [callback]);

	return containerRef;
};
