import {
	PaginationBtnContainer,
	PaginationBtnTruck,
	PaginationButton,
	PaginationContainer,
	PaginationContainerProps,
} from 'components/_ui/Pagination/Pagination.styles';
import { Typography } from 'components/_layout/Typography.styles';
import { Img } from 'components/_layout/Img.styles';
import Button from 'components/_ui/Button/Button';

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
	activePage: number;
}

const Pagination = ({
	shownPageCount,
	pageCount,
	vertical,
	setActivePage,
	activePage,
}: PaginationProps) => {
	const { offset, methods, btnList } = usePagination({
		pageCount,
		shownPageCount,
		activePage,
		setActivePage,
	});

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
		<PaginationContainer vertical={vertical}>
			<Button
				hide={pageCount <= shownPageCount}
				disabled={activePage === 0}
				onClick={methods.setStart}
				icon
			>
				<Img src={vertical ? UpDbArrow : LeftDbArrow} />
			</Button>
			<Button
				hide={pageCount <= shownPageCount}
				disabled={activePage === 0}
				onClick={methods.decreasePage}
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
				onClick={methods.increasePage}
				icon
			>
				<Img src={vertical ? BottomArrow : RightArrow} />
			</Button>
			<Button
				hide={pageCount <= shownPageCount}
				disabled={activePage === pageCount - 1}
				onClick={methods.setEnd}
				icon
			>
				<Img src={vertical ? BottomDbArrow : RightDbArrow} />
			</Button>
		</PaginationContainer>
	);
};

export default Pagination;
