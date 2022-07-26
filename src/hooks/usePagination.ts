import { useCallback, useMemo, useState } from 'react';

export const usePagination = (pageCount: number, shownPagesCount: number) => {
	const [offset, setOffset] = useState(0);
	const [startShownIndex, setStartShownIndex] = useState(0);
	const [endShownIndex, setEndShownIndex] = useState(shownPagesCount - 1);
	const [activePage, setActivePage] = useState(0);

	const btnList = useMemo(
		() => new Array(pageCount).fill('').map((_, i) => i),
		[pageCount]
	);

	const reset = useCallback(() => {
		setOffset(0);
		setStartShownIndex(0);
		setEndShownIndex(shownPagesCount - 1);
		setActivePage(0);
	}, []);

	const increasePage = useCallback(() => {
		if (activePage === pageCount) return;

		if (activePage === endShownIndex && activePage + 1 !== pageCount) {
			setEndShownIndex((state) => state + 1);
			setStartShownIndex((state) => state + 1);
			setOffset((state) => state + 1);
		}

		if (activePage < pageCount - 1) setActivePage((state) => state + 1);
	}, [activePage, endShownIndex, pageCount]);

	const decreasePage = useCallback(() => {
		if (activePage === 0) return;

		if (activePage === startShownIndex) {
			setStartShownIndex((state) => state - 1);
			setEndShownIndex((state) => state - 1);
			setOffset((state) => state - 1);
		}

		if (activePage > 0) setActivePage((state) => state - 1);
	}, [activePage, startShownIndex]);

	const setPage = useCallback(
		(index: number | 'start' | 'end') => {
			return () => {
				if (index === 'start') {
					setOffset(0);
					setEndShownIndex(shownPagesCount - 1);
					setStartShownIndex(0);
					setActivePage(0);
					return;
				}
				if (index === 'end') {
					setOffset(pageCount - shownPagesCount);
					setEndShownIndex(pageCount - 1);
					setStartShownIndex(pageCount - shownPagesCount);
					setActivePage(pageCount - 1);
					return;
				}
				setActivePage(index);
			};
		},
		[shownPagesCount, pageCount]
	);

	return {
		offset,
		increasePage,
		decreasePage,
		setPage,
		activePage,
		btnList,
		reset,
	};
};
