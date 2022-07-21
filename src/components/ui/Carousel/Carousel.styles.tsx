import styled from 'styled-components';

export interface WrapperProps {}

export interface InnerProps {
	slideWidth: number | string;
	transition: boolean;
	slidesNumber: number;
	offset?: number;
}

export interface SlideProps {
	slideWidth?: number | string;
}

export const Window = styled.div<WrapperProps>`
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	user-select: none;
	touch-action: none;
`;

export const SlideTruck = styled.div<InnerProps>`
	display: flex;
	transition: ${({ transition }) => transition && '500ms all'};
`;

export const Slide = styled.div<SlideProps>`
	flex-shrink: 0;
	img {
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
`;
