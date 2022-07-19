import { useEffect, useLayoutEffect } from 'react';
import { RippleContainerProps } from 'components/Ripple/Ripple.styled';

export interface UseDebouncedRippleCleanUpProps extends RippleContainerProps {
	cleanUpFunction: () => void;
}

export const useDebouncedRippleCleanUp = (
	rippleCount: number,
	duration: number,
	cleanUpFunction: () => void
) => {
	useEffect(() => {
		let bounce: ReturnType<typeof setTimeout> | undefined = undefined;
		if (rippleCount > 0) {
			clearTimeout(bounce);

			bounce = setTimeout(() => {
				cleanUpFunction();
				clearTimeout(bounce);
			}, duration);
		}

		return () => clearTimeout(bounce);
	}, [rippleCount, duration, cleanUpFunction]);
};
