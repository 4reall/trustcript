import { useState } from 'react';
import { useRouter } from 'next/router';

export const usePagination = (startPage: number = 1) => {
	const router = useRouter();
	const [page, setPage] = useState(startPage);

	const handlePageChange = (value: number) => {
		setPage(value);
		router.query.page = `${value}`;
		router.push({ pathname: router.pathname, query: router.query }, '', {
			shallow: true,
		});
	};

	return { page, handlePageChange };
};
