import styled, { css } from 'styled-components';
import convertUnits from 'utils/helpers/convertUnits';

export const Switcher = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem;
	text-transform: uppercase;
	cursor: pointer;
	& > *:first-child {
		margin-right: 0.5rem;
	}
	z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const LanguageMenu = styled.ul`
	margin-block: 0;
	padding: 0;
	border-radius: 5px;
	background: ${({ theme }) => theme.palette.white.light};
	z-index: ${({ theme }) => theme.zIndex.modal};
`;

export interface LanguageLabelContainerProps {
	isMenuItem?: boolean;
}

export const LanguageLabelContainer = styled.li<LanguageLabelContainerProps>`
	${({ theme, isMenuItem }) => css`
		display: flex;
		align-items: center;
		z-index: ${theme.zIndex.modal};

		& > :first-child {
			margin-right: 0.25rem;
		}
		${isMenuItem &&
		css`
			padding: 0.75rem;

			&:hover {
				background: ${theme.palette.white.normal};
			}
			&:active {
				background: ${theme.palette.white.dark};
			}
		`}
	`}
`;
