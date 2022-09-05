import styled, { css } from 'styled-components';
import { theme } from 'theme';
import convertUnits from 'utils/helpers/convertUnits';

export type TypographyVariant = keyof typeof theme.typography;

export interface TypographyProps {
	mt?: string | number;
	mb?: string | number;
	variant: TypographyVariant;
	bold?: boolean;
	color?: string;
	uppercase?: boolean;
	underline?: boolean;
	align?: 'left' | 'right' | 'center';
	display?: 'block' | 'inline-block' | 'inline';
}

export const Typography = styled.span<TypographyProps>`
	${({
		mt,
		mb,
		theme,
		align,
		uppercase,
		color,
		bold,
		variant,
		underline,
		display,
	}) => css`
		display: ${display};
		margin-top: ${convertUnits(mt)};
		margin-bottom: ${convertUnits(mb)};
		font-size: ${theme.typography[variant].fontSize};
		font-family: ${theme.typography[variant].fontFamily};
		font-weight: ${bold ? 700 : 500};
		line-height: ${theme.typography[variant].lineHeight};
		text-transform: ${uppercase && 'uppercase'};
		text-decoration: ${underline && 'underline'};
		text-align: ${align};
		color: ${color || theme.palette.normal.normal};
	`}
`;
