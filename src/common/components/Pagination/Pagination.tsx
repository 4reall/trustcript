import {
	PaginationBtnContainer,
	PaginationBtnTruck,
	PaginationButton,
	PaginationContainer,
	PaginationContainerProps,
} from 'src/common/components/Pagination/Pagination.styles';
import { Typography } from 'src/common/layout/Typography.styles';

import { useEffect, useMemo } from 'react';

import UpDbArrow from 'public/assets/icons/arrows/UpDbArrow.svg';
import BottomDbArrow from 'public/assets/icons/arrows/BottomDbArrow.svg';
import RightDbArrow from 'public/assets/icons/arrows/RightDbArrow.svg';
import LeftDbArrow from 'public/assets/icons/arrows/LeftDbArrow.svg';
import LeftArrow from 'public/assets/icons/arrows/LeftArrow.svg';
import RightArrow from 'public/assets/icons/arrows/RightArrow.svg';
import UpArrow from 'public/assets/icons/arrows/UpArrow.svg';
import BottomArrow from 'public/assets/icons/arrows/BottomArrow.svg';

import { usePagination } from 'src/common/components/Pagination/usePagination';
import Image from 'next/image';
import IconButton from 'src/common/components/_ui/IconButton/IconButton';

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
