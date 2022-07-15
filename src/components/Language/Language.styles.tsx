import styled from 'styled-components';
import { Margin, marginMixin } from '../../utils/mixins/margin.mixin';

export interface LanguageStylesProps {
	margin?: Margin;
}

export const LanguageStyles = styled.div<LanguageStylesProps>`
	${({ margin }) => marginMixin({ ...margin })};
`;
