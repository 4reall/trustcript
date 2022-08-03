import styled, { css } from 'styled-components';
import { IconBtn } from 'components/ui/Button/Button.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';

interface IconControlsBtnProps {
	active: boolean;
}

export const IconControlsContainer = styled.div`
	${({ theme }) => css`
		margin: 0 auto;
		width: fit-content;
		display: flex;

		& button {
			margin-left: 0.5rem;
			&:first-child {
				margin-left: 0;
			}
		}
		${IconBtn} {
			//border-radius: 5px;
			border-radius: 10px;
			border: 1px solid ${theme.palette.white.light};
			background: ${theme.palette.white.extraLight};
			// ${mediaQueries.up.md} {
			// 	border-radius: 10px;
			// }
		}
	`}
`;

export const IconControlsBtn = styled.button<IconControlsBtnProps>`
	${({ theme, active }) => css`
		width: 3rem;
		height: 3rem;
		padding: 0.5rem 0.3rem;
		border-radius: 10px;
		border: 1px solid ${theme.palette.white.light};
		background: ${theme.palette.white.extraLight};
		cursor: pointer;
		& img {
			width: 100%;
			height: 100%;
		}

		${active &&
		css`
			background: ${theme.palette.white.normal};
			border: 1px solid ${theme.palette.white.dark};
		`}
	`}
`;
