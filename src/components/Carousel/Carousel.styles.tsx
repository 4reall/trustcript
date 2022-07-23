import styled from 'styled-components';

export interface InnerProps {
	transition: boolean;
	transitionDuration: number;
}

export interface SlideProps {
	slideWidth?: number | string;
}

export const Window = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	user-select: none;
	touch-action: none;
`;

export const SlideTruck = styled.div<InnerProps>`
	display: flex;
	transition: ${({ transition, transitionDuration }) =>
		transition && transitionDuration + 'ms all'};
`;

export const Slide = styled.div<SlideProps>`
	flex-shrink: 0;
	img {
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
`;

export const BtnContainer = styled.div<{ variant: 'left' | 'right' }>`
	position: absolute;
	${({ variant }) => variant}: 1%;
	top: 50%;
	transform: translateY(-50%);
`;
