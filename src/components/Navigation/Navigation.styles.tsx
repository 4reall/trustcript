import styled, { css } from 'styled-components';

import { fontMixin, TypographyVariant } from 'utils/mixins/font.mixin';

export interface NavProps {
	isMobile?: boolean;
}

export const Nav = styled.nav<NavProps>`
	display: flex;
	padding: 1rem;
	${({ isMobile }) =>
		isMobile &&
		css`
			flex-direction: column;
			padding: 0;
			height: 100vh;

			& li {
				width: 100%;
				padding: 0;
				text-align: start;

				& .active {
					position: relative;
					transition: 400ms all;
					background: ${({ theme }) =>
						theme.palette.active.normal} !important;

					&:after {
						display: none;
					}
				}

				& a {
					display: block;
					padding: 0.625rem 2rem 0.625rem 2rem;
					color: ${({ theme }) => theme.palette.normal.normal};
					text-decoration: none;
				}
				& span {
					color: ${({ theme }) => theme.palette.normal.normal};
				}
			}
		`}
`;

export const NavItem = styled.li`
	padding-right: 1rem;
	text-align: center;

	&:last-child {
		padding-right: 0;
	}

	& span {
		color: inherit;
	}

	.active {
		position: relative;
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
		padding-bottom: 1rem;
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
