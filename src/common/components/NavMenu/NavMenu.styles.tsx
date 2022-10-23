import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Nav = styled.nav`
	height: 100vh;
`;
export const List = styled.ul`
	height: 100%;
`;
export const NavItem = styled.li<{ active?: boolean }>`
	${({ theme, active }) => css`
		color: ${theme.palette.normal.normal};
		transition: all 300ms;

		&:hover {
			color: ${theme.palette.normal.hover};
		}

		& a {
			display: block;
			width: 100%;
			padding: 0.5rem 1rem;
			text-decoration: none;
			&:visited {
				color: inherit;
			}
		}

		${active &&
		css`
			background: ${theme.palette.active.normal};
		`}
	`}
`;
