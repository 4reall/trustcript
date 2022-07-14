import styled from 'styled-components';
import { AlignItems, JustifyContent } from '../../../types/css';

interface GridProps {
	size: number;
	gap?: number | string;
	justify?: JustifyContent;
	align?: AlignItems;
}
interface ColProps {
	col: number;
	row?: number;
}

export const Grid = styled.div<GridProps>`
	display: grid;
	grid-template-columns: repeat(${({ size }) => size}, 1fr);
	justify-content: ${({ justify }) => justify};
	align-items: ${({ align }) => align};
`;
export const Col = styled.div<ColProps>`
	grid-row: span ${({ row }) => row};
	grid-column: span ${({ col }) => col};
`;
