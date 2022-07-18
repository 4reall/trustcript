import styled, { css } from 'styled-components';
import { ImgHTMLAttributes } from 'react';
import convertUnits from '../../utils/helpers/convertUnits';

export interface ImageProps extends ImgHTMLAttributes<any> {
	w?: number | string;
	h?: number | string;
	p?: number | string;
	mt?: number | string;
	mr?: number | string;
	mb?: number | string;
	ml?: number | string;
	bordered?: boolean;
}

export const Image = styled.img<ImageProps>`
	width: ${({ w }) => convertUnits(w)};
	height: ${({ h }) => convertUnits(h)};
	user-select: none;
`;
