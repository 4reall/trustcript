import styled from 'styled-components';

export interface WrapperProps {}

export interface InnerProps {
	slideWidth: number | string;
	transition: boolean;
	slidesNumber: number;
	offset?: number;
}

export const Slider = styled.div<WrapperProps>`
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	//object-fit: contain;
	user-select: none;
	touch-action: none;
`;

// .attrs<InnerProps>(({ offset }) => ({
// 	transform: `translateX(-${offset}px)`,
// }))

export const Inner = styled.div<InnerProps>`
	display: flex;
	transition: ${({ transition }) => transition && '300ms all'};
	& div {
		width: ${({ slideWidth }) => slideWidth}px;
	}
`;

export interface SlideProps {
	slideWidth?: number | string;
}

export const Slide = styled.div<SlideProps>`
	flex-shrink: 0;
	height: 200px;
	background: red;
	&:nth-child(2) {
		background: blue;
	}
	&:nth-child(3) {
		background: yellow;
	}
	img {
		pointer-events: none;
	}
`;
