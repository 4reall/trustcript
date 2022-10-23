import { useState } from 'react';
import { useRouter } from 'next/router';

export const usePagination = (startPage: number = 0) => {
	const router = useRouter();
	const [page, setPage] = useState(startPage);

	const handlePageChange = (value: number) => {
		setPage(value);
		router.query.page = `${value + 1}`;
		router.push({ pathname: router.pathname, query: router.query }, '', {
			shallow: true,
		});
	};

	return { page, handlePageChange };
};
