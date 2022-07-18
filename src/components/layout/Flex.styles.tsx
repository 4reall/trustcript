import styled from 'styled-components';
import { AlignItems, Direction, JustifyContent } from 'types/Css';
import convertUnits from 'utils/helpers/convertUnits';

export interface FlexProps {
	direction?: Direction;
	justify?: JustifyContent;
	align?: AlignItems;
	relative?: boolean;
	w?: string | number;
}

export const Flex = styled.div<FlexProps>`
	width: ${({ w }) => convertUnits(w)};
	position: ${({ relative }) => relative && 'relative'};
	display: flex;
	justify-content: ${({ justify }) => justify};
	align-items: ${({ align }) => align};
	flex-direction: ${({ direction }) => direction};
`;
