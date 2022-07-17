import styled from 'styled-components';

import { fontMixin, TypographyVariant } from 'utils/mixins/font.mixin';

export interface NavProps {}

export const Nav = styled.nav<NavProps>`
	display: flex;
	padding: 1rem;
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
		color: ${({ theme }) => theme.palette.active.normal};
		transition: 200ms color;
		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			bottom: 0;
			left: 0;
			background: ${({ theme }) => theme.palette.active.normal};
		}
		&:hover {
			color: ${({ theme }) => theme.palette.active.hover};
			&:after {
				background: ${({ theme }) => theme.palette.active.hover};
			}
		}
		&:active {
			color: ${({ theme }) => theme.palette.active.active};
			&:after {
				background: ${({ theme }) => theme.palette.active.active};
			}
		}
	}

	& a {
		color: ${({ theme }) => theme.palette.normal.normal};
		text-decoration: none;
		&:hover {
			color: ${({ theme }) => theme.palette.normal.hover};
		}
		&:active {
			color: ${({ theme }) => theme.palette.normal.active};
		}
	}
`;
