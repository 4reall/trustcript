import styled from 'styled-components';
import { AlignItems, Direction, JustifyContent } from 'types/css';

export interface RowProps {
	direction?: Direction;
	justify?: JustifyContent;
	align?: AlignItems;
}

export const Row = styled.div<RowProps>`
	display: flex;
	justify-content: ${({ justify }) => justify};
	align-items: ${({ align }) => align};
	flex-direction: ${({ direction }) => direction};
`;
