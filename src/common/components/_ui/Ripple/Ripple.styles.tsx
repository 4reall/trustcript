import styled from '@emotion/styled';

export interface RippleContainerProps {
	duration: number;
	color: string;
}

export const RippleContainer = styled.div<RippleContainerProps>`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
	z-index: 1;

	span {
		transform: scale(0);
		border-radius: 100%;
		position: absolute;
		background-color: ${(props) => props.color};
		filter: opacity(0.3);
		animation-name: ripple;
		animation-duration: ${(props) => props.duration}ms;
	}

	@keyframes ripple {
		to {
			opacity: 0;
			transform: scale(2);
		}
	}
`;
