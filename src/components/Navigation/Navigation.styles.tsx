import styled from 'styled-components';
import { MarginEnum } from 'utils/constants/spacing';
import convertUnits from 'utils/helpers/convertUnits';
import { marginMixin, Margins } from 'utils/mixins /margin.mixin';
import { fontMixin, TypographyVariant } from 'utils/mixins /font.mixin';

export interface NavProps extends Margins {
	variant?: TypographyVariant;
}

export const Nav = styled.nav<NavProps>`
	padding: 1rem;
	${({ theme, variant }) => fontMixin({ theme, variant })};
	${({ variant, ...props }) => marginMixin({ ...props })};
`;

export const NavItem = styled.div`
	//min-width: 33.3%;
	text-align: center;

	.active {
		position: relative;
		color: ${({ theme }) => theme.palette.active};
		&:after {
			content: '';
			position: absolute;
		}
	}

	& a {
		color: ${({ theme }) => theme.palette.normal};
		text-decoration: none;
	}
`;
