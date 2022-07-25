import {
	FiltersContainer,
	FiltersTruck,
	FiltersWindow,
} from 'components/Filters/Filters.styles';
import Button from 'components/ui/Button/Button';
import { useSwipe } from 'hooks/useSwipe';
import { useCallback, useEffect, useState } from 'react';
import { Image } from 'components/layout/Image.styles';

import LeftArrow from 'assets/icons/arrows/LeftArrow.svg';
import RightArrow from 'assets/icons/arrows/RightArrow.svg';
import { useResize } from 'hooks/useResize';

export interface IFilter {
	title: string;
	// active: boolean;
	onClick: () => void;
}

interface FiltersProps {
	filters: IFilter[];
}

const Filters = ({ filters }: FiltersProps) => {
	const [offset, setOffset] = useState(0);
	const [windowWidth, setWindowWidth] = useState(800);
	const [pages, setPages] = useState(0);
	const containerRef = useResize(
		useCallback((width) => {
			setOffset(0);
			setWindowWidth(width);
		}, [])
	);

	const { handleTouchStart, handleTouchMove, handleTouchEnd, swipeShift } =
		useSwipe({
			containerWidth: windowWidth,
			threshold: 0.2,
			leftSwipeCallback: () => {
				setOffset(offset + swipeShift);
			},
			rightSwipeCallback: () => {
				if (offset) setOffset(offset + swipeShift);
			},
		});

	// useEffect(() => {
	// 	if (offset < 0) setOffset(0);
	// 	if (offset > Math.floor((filters.length / 4) * windowWidth))
	// 		setOffset((filters.length * windowWidth) / 4);
	// }, [offset]);

	const moveToLeft = () => {
		setOffset((state) => offset - windowWidth);
	};
	const moveToRight = () => {
		setOffset((state) => offset + windowWidth);
	};

	return (
		<FiltersContainer
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{/*<Button onClick={moveToLeft} icon>*/}
			{/*	<Image src={LeftArrow} alt="move left icon" />*/}
			{/*</Button>*/}
			{/*<FiltersWindow*/}
			{/*	ref={containerRef}*/}
			{/*	// style={{*/}
			{/*	// 	width: windowWidth,*/}
			{/*	// }}*/}
			{/*>*/}
			{/*	<FiltersTruck*/}
			{/*		style={{*/}
			{/*			transform: `translateX(-${offset + swipeShift}px)`,*/}
			{/*		}}*/}
			{/*	>*/}
			{/*		{filters.map(({ onClick, title }) => (*/}
			{/*			<Button onClick={onClick} dark>*/}
			{/*				{title}*/}
			{/*			</Button>*/}
			{/*		))}*/}
			{/*	</FiltersTruck>*/}
			{/*</FiltersWindow>*/}
			{/*<Button onClick={moveToRight} icon>*/}
			{/*	<Image src={RightArrow} alt="move right icon" />*/}
			{/*</Button>*/}
			{filters.map(({ onClick, title }) => (
				<Button full onClick={onClick} dark>
					{title}
				</Button>
			))}
		</FiltersContainer>
	);
};

export default Filters;
