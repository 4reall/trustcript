import styled from 'styled-components';
import { theme } from 'theme';

export type TypographyVariant = keyof typeof theme.typography;

export interface TypographyProps {
	variant: TypographyVariant;
	bold?: boolean;
	color?: string;
	uppercase?: boolean;
	underline?: boolean;
}

export const Typography = styled.span<TypographyProps>`
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
