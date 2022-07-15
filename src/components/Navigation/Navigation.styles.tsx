import styled from 'styled-components';
import { MarginEnum } from 'utils/constants/spacing';
import convertUnits from 'utils/helpers/convertUnits';
import { marginMixin, Margin } from 'utils/mixins/margin.mixin';
import { fontMixin, TypographyVariant } from 'utils/mixins/font.mixin';
import { BreakpointProps } from '../../types/BreakpointProps';

export interface NavProps extends Margin {
	variant?: TypographyVariant;
	margin?: Margin;
}

export const Nav = styled.nav<NavProps>`
	padding: 1rem;
	${({ theme, variant = 'h4' }) => fontMixin({ theme, variant })};
	${({ margin }) => marginMixin({ ...margin })};
`;

export const NavItem = styled.div`
	//min-width: 33.3%;
	padding-right: 1rem;
	text-align: center;

	&:last-child {
		padding-right: 0;
	}

	.active {
		position: relative;
		padding-bottom: 1rem;
		color: ${({ theme }) => theme.palette.active};
		transition: 200ms color;
		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			bottom: 0;
			left: 0;
			background: ${({ theme }) => theme.palette.active};
		}
	}

	& a {
		color: ${({ theme }) => theme.palette.normal};
		text-decoration: none;
	}
`;
