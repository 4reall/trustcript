import { useCallback, useMemo, useState } from 'react';

const buffPages = 1;

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
	}, [shownPagesCount]);

	const increasePage = useCallback(() => {
		if (activePage === pageCount) return;

		// активная страница и 1 страницы буффера && -2 из-за индексации страниц с нуля
		if (
			activePage === endShownIndex - buffPages &&
			activePage !== pageCount - buffPages - 1
		) {
			setEndShownIndex((state) => state + 1);
			setStartShownIndex((state) => state + 1);
			setOffset((state) => state + 1);
		}

		if (activePage < pageCount - 1) setActivePage((state) => state + 1);
	}, [activePage, endShownIndex, pageCount]);

	const decreasePage = useCallback(() => {
		if (activePage === 0) return;

		if (
			activePage === startShownIndex + buffPages &&
			activePage !== buffPages
		) {
			setStartShownIndex((state) => state - 1);
			setEndShownIndex((state) => state - 1);
			setOffset((state) => state - 1);
		}

		if (activePage > 0) setActivePage((state) => state - 1);
	}, [activePage, startShownIndex]);

	const setStart = useCallback(() => {
		setOffset(0);
		setEndShownIndex(shownPagesCount - 1);
		setStartShownIndex(0);
		setActivePage(0);
		return;

		// eslint-disable-next-line
	}, [
		shownPagesCount,
		pageCount,
		startShownIndex,
		endShownIndex,
		activePage,
	]);

	const setEnd = useCallback(() => {
		setOffset(pageCount - shownPagesCount);
		setEndShownIndex(pageCount - 1);
		setStartShownIndex(pageCount - shownPagesCount);
		setActivePage(pageCount - 1);
		// eslint-disable-next-line
	}, [
		shownPagesCount,
		pageCount,
		startShownIndex,
		endShownIndex,
		activePage,
	]);

	const setPage = useCallback(
		(index: number) => {
			return () => {
				if (index === endShownIndex && index !== pageCount - 1) {
					setEndShownIndex((state) => state + buffPages);
					setStartShownIndex((state) => state + buffPages);
					setOffset((state) => state + buffPages);
				}
				if (index === startShownIndex && index !== 0) {
					setEndShownIndex((state) => state - buffPages);
					setStartShownIndex((state) => state - buffPages);
					setOffset((state) => state - buffPages);
				}
				setActivePage(index);
			};
		},
		// eslint-disable-next-line
		[shownPagesCount, pageCount, startShownIndex, endShownIndex, activePage]
	);

	return {
		offset,
		increasePage,
		decreasePage,
		setPage,
		setEnd,
		setStart,
		activePage,
		btnList,
		reset,
	};
};
