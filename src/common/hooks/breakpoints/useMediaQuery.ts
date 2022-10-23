import { useState, useEffect, useLayoutEffect } from 'react';
import { queries } from 'src/common/utils/constants/mediaQueries';
import useIsomorphicLayoutEffect from 'src/common/hooks/useIsomorphicLayoutEffect';

type Query = typeof queries[keyof typeof queries];

const useMediaQuery = (query: string): boolean => {
	const getMatches = (query: string): boolean => {
		// Prevents SSR issues
		if (typeof window !== 'undefined') {
			return window.matchMedia(query).matches;
		}
		return false;
	};

	const [matches, setMatches] = useState<boolean>(false);

	const handleChange = () => setMatches(getMatches(query));

	useIsomorphicLayoutEffect(() => {
		//
		const matchMedia = window.matchMedia(query);

		// Triggered at the first client-side load and if query changes
		handleChange();

		matchMedia.addEventListener('change', handleChange);

		return () => matchMedia.removeEventListener('change', handleChange);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return matches;
};

export default useMediaQuery;
