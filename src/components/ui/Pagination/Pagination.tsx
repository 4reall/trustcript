import {
	PaginationBtnContainer,
	PaginationBtnTruck,
	PaginationButton,
	PaginationContainer,
	PaginationContainerProps,
} from 'components/ui/Pagination/Pagination.styles';
import { Typography } from 'components/layout/Typography.styles';
import { Img } from 'components/layout/Img.styles';
import Button from 'components/ui/Button/Button';

import { useEffect } from 'react';

import UpDbArrow from 'assets/icons/arrows/UpDbArrow.svg';
import BottomDbArrow from 'assets/icons/arrows/BottomDbArrow.svg';
import RightDbArrow from 'assets/icons/arrows/RightDbArrow.svg';
import LeftDbArrow from 'assets/icons/arrows/LeftDbArrow.svg';
import LeftArrow from 'assets/icons/arrows/LeftArrow.svg';
import RightArrow from 'assets/icons/arrows/RightArrow.svg';
import UpArrow from 'assets/icons/arrows/UpArrow.svg';
import BottomArrow from 'assets/icons/arrows/BottomArrow.svg';

import { usePagination } from 'hooks/usePagination';

interface PaginationProps extends PaginationContainerProps {
	shownPageCount: number;
	pageCount: number;
	setActivePage: (page: number) => void;
}

const Pagination = ({
	shownPageCount,
	pageCount,
	vertical,
	setActivePage,
}: PaginationProps) => {
	const {
		offset,
		increasePage,
		decreasePage,
		setPage,
		setStart,
		setEnd,
		activePage,
		btnList,
		reset,
	} = usePagination(pageCount, shownPageCount);

	const btns = btnList.map((page, i) => (
		<PaginationButton
			key={i}
			onClick={setPage(i)}
			active={i === activePage}
		>
			<Typography variant="button">{i + 1}</Typography>
		</PaginationButton>
	));

	useEffect(() => {
		setActivePage(activePage);
		// eslint-disable-next-line
	}, [activePage, pageCount]);

	useEffect(() => {
		reset();
	}, [setActivePage, reset]);

	return (
		<PaginationContainer vertical={vertical}>
			<Button
				hide={pageCount <= shownPageCount}
				disabled={activePage === 0}
				onClick={setStart}
				icon
			>
				<Img src={vertical ? UpDbArrow : LeftDbArrow} />
			</Button>
			<Button
				hide={pageCount <= shownPageCount}
				disabled={activePage === 0}
				onClick={decreasePage}
				icon
			>
				<Img src={vertical ? UpArrow : LeftArrow} />
			</Button>
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
			<Button
				hide={pageCount <= shownPageCount}
				disabled={activePage === pageCount - 1}
				onClick={increasePage}
				icon
			>
				<Img src={vertical ? BottomArrow : RightArrow} />
			</Button>
			<Button
				hide={pageCount <= shownPageCount}
				disabled={activePage === pageCount - 1}
				onClick={setEnd}
				icon
			>
				<Img src={vertical ? BottomDbArrow : RightDbArrow} />
			</Button>
		</PaginationContainer>
	);
};

export default Pagination;
