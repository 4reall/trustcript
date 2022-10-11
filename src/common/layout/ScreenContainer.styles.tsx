import styled from '@emotion/styled';

export interface ScreenContainerProps {
	align?: 'column' | 'column-reverse' | 'row-reverse' | 'row';
}

export const ScreenContainer = styled.section<ScreenContainerProps>`
	padding: 2rem 0;
`;
