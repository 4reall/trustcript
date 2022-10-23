import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { SpacingArray } from 'src/common/utils/helpers/convertSpacing';

export interface SectionProps {
	p?: SpacingArray;
	direction?: CSSProperties['flexDirection'];
	justify?: CSSProperties['justifyContent'];
	align?: CSSProperties['alignItems'];
}

export const Section = styled.section<SectionProps>`
	padding: ${({ p }) => (p ? p : '2rem 0 2rem 0')};
	display: flex;
	flex-direction: ${({ direction }) => direction};
	justify-content: ${({ justify }) => justify};
	align-items: ${({ align }) => align};
`;
