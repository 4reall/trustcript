import { useCallback, useMemo, useState } from 'react';

const buffPages = 1;

interface UsePaginationProps {
	pageCount: number;
	pageDisplayed: number;
	setActivePage: (page: number) => void;
	activePage: number;
}

export const usePagination = ({
	pageCount,
	pageDisplayed,
	setActivePage,
	activePage,
}: UsePaginationProps) => {
	const [offset, setOffset] = useState(0);
	const [startShownIndex, setStartShownIndex] = useState(0);
	const [endShownIndex, setEndShownIndex] = useState(pageDisplayed - 1);
	// const [activeInternalPage, setActiveInternalPage] = useState(activePage);

	const increasePage = useCallback(() => {
		if (activePage === pageCount) return;

		if (
			activePage === endShownIndex - buffPages &&
			activePage !== pageCount - buffPages - 1
		) {
			setEndShownIndex((state) => state + 1);
			setStartShownIndex((state) => state + 1);
			setOffset((state) => state + 1);
		}

		if (activePage < pageCount - 1)
			// activePage((state) => state + 1);
			setActivePage(activePage + 1);
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

		if (activePage > 0) setActivePage(activePage - 1);
	}, [activePage, startShownIndex]);

	const setStart = useCallback(() => {
		setOffset(0);
		setEndShownIndex(pageDisplayed - 1);
		setStartShownIndex(0);
		setActivePage(0);
		// eslint-disable-next-line
	}, [pageDisplayed, pageCount, startShownIndex, endShownIndex, activePage]);

	const setEnd = useCallback(() => {
		setOffset(pageCount - pageDisplayed);
		setEndShownIndex(pageCount - 1);
		setStartShownIndex(pageCount - pageDisplayed);
		setActivePage(pageCount - 1);
		// eslint-disable-next-line
	}, [pageDisplayed, pageCount, startShownIndex, endShownIndex, activePage]);

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
		[pageDisplayed, pageCount, startShownIndex, endShownIndex, activePage]
	);

	return {
		offset,
		methods: {
			increasePage,
			decreasePage,
			setPage,
			setEnd,
			setStart,
		},
	};
};
