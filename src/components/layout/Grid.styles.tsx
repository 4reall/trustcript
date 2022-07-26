import styled, { css } from 'styled-components';
import { AlignItems, JustifyContent } from 'types/Css';
import { mq } from 'utils/helpers/mediaQueries';

export interface GridProps {
	gridSize: number | number[];
	gap?: number | string;
	justify?: JustifyContent;
	align?: AlignItems;
}
export interface ColProps {
	col: number | number[];
	row?: number;
}

export const Grid = styled.div<GridProps>`
	${({ gridSize, justify, align }) => css`
		display: grid;
		grid-template-columns: repeat(${gridSize}, 1fr);
		justify-content: ${justify};
		align-items: ${align};
	`}

	${({ gridSize }) => mq({ prop: 'grid-template-columns', styles: gridSize })}
`;
export const Col = styled.div<ColProps>`
	grid-row: span ${({ row }) => row};
	grid-column: span ${({ col }) => col};

	${({ col }) => mq({ prop: 'grid-column', styles: col })}
`;
