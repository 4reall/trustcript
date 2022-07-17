import styled, { css } from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';
import { TypographyVariant } from 'components/layout/Typography.styles';
import Select, { OptionProps } from 'react-select';
import { IOption } from 'components/Header/components/Language/LanguageSelect';

export interface LanguageStylesProps {
	variant?: TypographyVariant;
}

export const LanguageStyles = styled.div<LanguageStylesProps>`
	position: relative;
	display: flex;
	padding: 0.5rem;
	text-transform: uppercase;
	cursor: pointer;

	& > :first-child {
		margin-right: 0.5rem;
	}

	${mediaQueries.up.sm} {
		margin: 0 2rem 0 2rem;
	}
	${mediaQueries.up.lg} {
		margin: 0 4rem 0 4rem;
	}
`;

export const LanguageMenu = styled.ul`
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	border-radius: 4px;
	background: ${({ theme }) => theme.palette.white.normal};
	overflow: hidden;
`;

export const CustomSelect = styled.div``;

export interface LanguageOptionStylesProps {
	isMenu?: boolean;
}

export const LanguageOptionStyles = styled.div<LanguageOptionStylesProps>`
	display: flex;
	align-items: center;
	& > :first-child {
		margin-right: 0.25rem;
	}

	padding: 0.5rem;

	${({ isMenu }) =>
		isMenu &&
		css`
			padding: 0.5rem;
			&:hover {
				background: ${({ theme }) => theme.palette.white.hover};
			}
			&:active {
				background: ${({ theme }) => theme.palette.white.active};
			}
		`}
`;

// export const item = styled(Option)
