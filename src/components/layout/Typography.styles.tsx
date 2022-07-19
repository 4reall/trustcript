import styled from 'styled-components';
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
}

export const Typography = styled.span<TypographyProps>`
	margin-top: ${({ mt }) => convertUnits(mt)};
	margin-bottom: ${({ mb }) => convertUnits(mb)};
	font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
	font-family: ${({ theme, variant }) =>
		theme.typography[variant].fontFamily};
	font-weight: ${({ bold }) => (bold ? 700 : 500)};
	line-height: ${({ theme, variant }) =>
		theme.typography[variant].lineHeight};
	text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
	text-decoration: ${({ underline }) => underline && 'underline'};
	color: ${({ theme, color }) => color || theme.palette.normal.normal};
`;
