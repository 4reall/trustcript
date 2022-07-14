import styled from 'styled-components';

export interface ImageWrapperProps {
	w?: number | string | undefined;
	h?: number | string | undefined;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
	//display: flex;
	//justify-content: center;
	//align-items: center;
	user-select: none;
`;
