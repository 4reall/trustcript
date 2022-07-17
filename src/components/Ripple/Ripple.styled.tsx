import styled from 'styled-components';
import { RippleContainerProps } from './Types';

export const RippleContainer = styled.div<RippleContainerProps>`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	span {
		transform: scale(0);
		border-radius: 100%;
		position: absolute;
		opacity: 0.75;
		background-color: ${(props) => props.color};
		filter: opacity(0.5);
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
