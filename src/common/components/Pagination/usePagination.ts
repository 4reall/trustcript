import { useEffect, useState } from 'react';

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
	const [startShownIndex, setStartShownIndex] = useState(1);
	const [endShownIndex, setEndShownIndex] = useState(pageDisplayed + 1);

	const increasePage = () => {
		if (activePage < pageCount) setActivePage(activePage + 1);
	};

	const decreasePage = () => {
		if (activePage > 1) setActivePage(activePage - 1);
	};

	const setStart = () => setActivePage(1);

	const setEnd = () => setActivePage(pageCount);

	const setPage = (index: number) => () => {
		if (index === endShownIndex - 1 && index !== pageCount - 1) {
			setEndShownIndex((state) => state + 1);
			setStartShownIndex((state) => state + 1);
			setOffset((state) => state + 1);
		}
		if (index === startShownIndex - 1 && index !== 0) {
			setEndShownIndex((state) => state - 1);
			setStartShownIndex((state) => state - 1);
			setOffset((state) => state - 1);
		}
		setActivePage(index);
	};

	useEffect(() => {
		if (activePage === pageCount) {
			setOffset(pageCount - pageDisplayed + 1);
			setEndShownIndex(pageCount);
			setStartShownIndex(pageCount - pageDisplayed + 1);
			return;
		}
		if (activePage === 1) {
			setOffset(1);
			setEndShownIndex(pageDisplayed);
			setStartShownIndex(1);
			return;
		}
		// if reach start boundary of shown pages
		if (activePage === startShownIndex) {
			setStartShownIndex((state) => state - 1);
			setEndShownIndex((state) => state - 1);
			setOffset((state) => state - 1);
			return;
		}
		// if reach end boundary of shown pages
		if (activePage === endShownIndex && activePage !== pageCount) {
			setEndShownIndex((state) => state + 1);
			setStartShownIndex((state) => state + 1);
			setOffset((state) => state + 1);
			return;
		}
	}, [activePage]);

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
