import styled from '@emotion/styled';
import {
	convertSpacing,
	SpacingArray,
} from '@/common/utils/helpers/convertSpacing';

export interface ContainerProps {
	columns?: 1 | 2 | 3 | 4 | 6;
	margin?: SpacingArray;
}

export const Container = styled.div<ContainerProps>`
	display: grid;
	grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
	gap: 0.5rem;
	flex: 1;
	margin: ${({ margin }) => (margin ? convertSpacing(margin) : '')};
`;
