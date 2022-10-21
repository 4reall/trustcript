import {
	Carousel as CarouselBase,
	CarouselProps as CarouselBaseProps,
} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import IconButton from '@/common/components/_ui/IconButton/IconButton';
import Image from 'next/image';
import ChevronRight from '@/assets/icons/chevron-right-solid.svg';
import ChevronLeft from '@/assets/icons/chevron-left-solid.svg';
import {
	Btn,
	BtnContainer,
	CarouselContainer,
	ControlButton,
} from '@/common/components/Carousel/Carousel.styles';

interface CarouselOwnProps {}

type CarouselProps = CarouselOwnProps & Partial<CarouselBaseProps>;

const Carousel = ({ children, showArrows, ...props }: CarouselProps) => {
	return (
		<CarouselContainer>
			<CarouselBase
				renderArrowNext={(clickHandler) => (
					<BtnContainer align="right">
						<IconButton hide={!showArrows} onClick={clickHandler}>
							<Image
								src={ChevronRight}
								alt={'move to right icon'}
								width="100%"
								height="100%"
								objectFit="contain"
							/>
						</IconButton>
					</BtnContainer>
				)}
				renderArrowPrev={(clickHandler) => (
					<BtnContainer align="left">
						<IconButton hide={!showArrows} onClick={clickHandler}>
							<Image
								src={ChevronLeft}
								alt={'move to left icon'}
								width="100%"
								height="100%"
								objectFit="contain"
							/>
						</IconButton>
					</BtnContainer>
				)}
				renderIndicator={(clickHandler, isSelected, index) => (
					<ControlButton
						aria-label={`slide index ${index}`}
						role="button"
						tabIndex={0}
						key={index}
						onClick={clickHandler}
						active={isSelected}
					/>
					// <Btn />
				)}
				infiniteLoop
				swipeable
				showStatus={false}
				showThumbs={false}
				{...props}
			>
				{children}
			</CarouselBase>
		</CarouselContainer>
	);
};

export default Carousel;
