import styled from 'styled-components';
import { ImgHTMLAttributes } from 'react';
import convertUnits from '../../utils/helpers/convertUnits';

export interface ImageProps extends ImgHTMLAttributes<any> {
	w?: number | string;
	h?: number | string;
	p?: number | string;
}

export const Image = styled.img<ImageProps>`
	//display: flex;
	//justify-content: center;
	//align-items: center;
	padding: ${({ p }) => convertUnits(p)};
	width: ${({ w }) => convertUnits(w)};
	height: ${({ h }) => convertUnits(h)};
	user-select: none;
`;
