import {
	PaginationBtnContainer,
	PaginationBtnTruck,
	PaginationButton,
	PaginationContainer,
	PaginationContainerProps,
} from '@/components/Pagination/Pagination.styles';
import { Typography } from '@/layout/Typography.styles';

import { useEffect, useMemo } from 'react';

import UpDbArrow from '@/assets/icons/arrows/UpDbArrow.svg';
import BottomDbArrow from '@/assets/icons/arrows/BottomDbArrow.svg';
import RightDbArrow from '@/assets/icons/arrows/RightDbArrow.svg';
import LeftDbArrow from '@/assets/icons/arrows/LeftDbArrow.svg';
import LeftArrow from '@/assets/icons/arrows/LeftArrow.svg';
import RightArrow from '@/assets/icons/arrows/RightArrow.svg';
import UpArrow from '@/assets/icons/arrows/UpArrow.svg';
import BottomArrow from '@/assets/icons/arrows/BottomArrow.svg';

import { usePagination } from '@/components/Pagination/usePagination';
import Image from 'next/image';
import IconButton from '@/components/_ui/IconButton/IconButton';

interface PaginationProps extends PaginationContainerProps {
	pageDisplayed: number;
	pageCount: number;
	setActivePage: (page: number) => void;
	activePage: number;
}

const Pagination = ({
	pageDisplayed,
	pageCount,
	vertical,
	setActivePage,
	activePage,
}: PaginationProps) => {
	const { offset, methods } = usePagination({
		pageCount,
		pageDisplayed,
		activePage,
		setActivePage,
	});

	const btnList = useMemo(
		() => new Array(pageCount).fill('').map((_, i) => i),
		[pageCount]
	);

	const btns = btnList.map((page, i) => (
		<PaginationButton
			key={i}
			onClick={methods.setPage(i)}
			active={i === activePage}
		>
			<Typography variant="button">{i + 1}</Typography>
		</PaginationButton>
	));

	useEffect(() => {
		setActivePage(activePage);
		// eslint-disable-next-line
	}, [activePage, pageCount]);

	return (
		<PaginationContainer
			m={['1rem', 'auto', 0, 'auto']}
			vertical={vertical}
		>
			<IconButton
				hide={pageCount <= pageDisplayed}
				disabled={activePage === 0}
				onClick={methods.setStart}
			>
				<Image src={vertical ? UpDbArrow : LeftDbArrow} />
			</IconButton>
			<IconButton
				hide={pageCount <= pageDisplayed}
				disabled={activePage === 0}
				onClick={methods.decreasePage}
			>
				<Image src={vertical ? UpArrow : LeftArrow} />
			</IconButton>
			<PaginationBtnContainer>
				<PaginationBtnTruck
					style={{
						transform: vertical
							? `translateY(-${offset * 25}%)`
							: `translateX(-${offset * 25}%)`,
					}}
				>
					{btns}
				</PaginationBtnTruck>
			</PaginationBtnContainer>
			<IconButton
				hide={pageCount <= pageDisplayed}
				disabled={activePage === pageCount - 1}
				onClick={methods.increasePage}
			>
				<Image src={vertical ? BottomArrow : RightArrow} />
			</IconButton>
			<IconButton
				hide={pageCount <= pageDisplayed}
				disabled={activePage === pageCount - 1}
				onClick={methods.setEnd}
			>
				<Image src={vertical ? BottomDbArrow : RightDbArrow} />
			</IconButton>
		</PaginationContainer>
	);
};

export default Pagination;
