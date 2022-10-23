import styled from '@emotion/styled';
import {
	convertSpacing,
	SpacingArray,
} from 'src/common/utils/helpers/convertSpacing';
import convertUnits from 'src/common/utils/helpers/convertUnits';

interface SharedProps {
	w?: string | number;
	p?: SpacingArray;
	m?: SpacingArray;
}

export const Container = styled.div<SharedProps>`
	padding: ${({ p }) => convertSpacing(p)};
	width: ${({ w }) => convertUnits(w)};
	margin: ${({ m }) => convertSpacing(m)};
`;
