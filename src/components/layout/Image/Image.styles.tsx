import styled from 'styled-components';
import { Padding, paddingMixin } from 'utils/mixins/paddings.mixin';
import { Margin, marginMixin } from 'utils/mixins/margin.mixin';

export interface ImageWrapperProps {
	w?: number | string | undefined;
	h?: number | string | undefined;
	padding?: Padding;
	margin?: Margin;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
	//display: flex;
	//justify-content: center;
	//align-items: center;
	${({ margin }) => marginMixin({ ...margin })};
	${({ padding }) => paddingMixin({ ...padding })};
	user-select: none;
`;
