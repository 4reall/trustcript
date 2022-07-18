import styled, { css } from 'styled-components';
import convertUnits from 'utils/helpers/convertUnits';

export interface BoxProps {
	w?: number | string;
	h?: number | string;
	m?: number | string;
	mx?: number | string;
	my?: number | string;
	mt?: number | string;
	mr?: number | string;
	mb?: number | string;
	ml?: number | string;
	p?: number | string;
	py?: number | string;
	px?: number | string;
	pt?: number | string;
	pr?: number | string;
	pb?: number | string;
	pl?: number | string;
	bordered?: boolean;
}

export const Box = styled.div<BoxProps>`
	width: ${({ w }) => convertUnits(w)};
	height: ${({ h }) => convertUnits(h)};
	${({ m, mx, my, mt, mr, mb, ml }) => css`
		margin: ${convertUnits(m)};
		margin: ${my ? my : '0'} ${convertUnits(mx)};
		margin: ${convertUnits(my)} ${mx ? mx : '0'};
		margin-top: ${convertUnits(mt)};
		margin-right: ${convertUnits(mr)};
		margin-bottom: ${convertUnits(mb)};
		margin-left: ${convertUnits(ml)};
	`};
	${({ p, px, py, pt, pr, pb, pl }) => css`
		padding: ${convertUnits(p)};
		padding: ${py ? py : '0'} ${convertUnits(px)};
		padding: ${convertUnits(py)} ${px ? px : '0'};
		padding-top: ${convertUnits(pt)};
		padding-right: ${convertUnits(pr)};
		padding-bottom: ${convertUnits(pb)};
		padding-left: ${convertUnits(pl)};
	`};
`;

// ${({ theme, bordered }) =>
// bordered &&
// css`
// 			position: relative;
// 			//border-top: 8px solid transparent;
// 			&:before {
// 				content: '';
// 				position: absolute;
// 				top: 0;
// 				right: 0;
// 				left: 0;
// 				bottom: 0;
// 				border-radius: 1rem;
// 				margin: -2px;
// 				background: ${theme.palette.borderBg};
// 				z-index: -1;
// 			}
// 		`}
