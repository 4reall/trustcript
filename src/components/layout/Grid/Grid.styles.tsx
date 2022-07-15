import styled from 'styled-components';
import { AlignItems, JustifyContent } from '../../../types/Css';
import { mq } from 'utils/mixins/mediaQueries';

export interface GridStylesProps {
	gridSize: number | number[];
	gap?: number | string;
	justify?: JustifyContent;
	align?: AlignItems;
}
export interface ColProps {
	col: number | number[];
	row?: number;
}

export const GridStyles = styled.div<GridStylesProps>`
	display: grid;
	grid-template-columns: repeat(${({ gridSize }) => gridSize}, 1fr);
	justify-content: ${({ justify }) => justify};
	align-items: ${({ align }) => align};
	${({ gridSize }) => mq({ prop: 'grid-template-columns', styles: gridSize })}
`;
export const Col = styled.div<ColProps>`
	grid-row: span ${({ row }) => row};
	grid-column: span ${({ col }) => col};
	${({ col }) => mq({ prop: 'grid-column', styles: col })}
`;
