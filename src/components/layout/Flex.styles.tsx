import styled from 'styled-components';
import { AlignItems, Direction, JustifyContent } from 'types/Css';

export interface FlexProps {
	direction?: Direction;
	justify?: JustifyContent;
	align?: AlignItems;
}

export const Flex = styled.div<FlexProps>`
	display: flex;
	justify-content: ${({ justify }) => justify};
	align-items: ${({ align }) => align};
	flex-direction: ${({ direction }) => direction};
`;
