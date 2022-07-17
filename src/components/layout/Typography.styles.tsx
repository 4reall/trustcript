import styled from 'styled-components';
import { theme } from 'theme';

export type TypographyVariant = keyof typeof theme.typography;

export interface TypographyProps {
	variant: TypographyVariant;
	bold?: boolean;
	color?: string;
}

export const TypographyStyles = styled.span<TypographyProps>`
	font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
	font-family: ${({ theme, variant }) =>
		theme.typography[variant].fontFamily};
	font-weight: ${({ bold = 500 }) => (bold ? 700 : 500)};
	color: ${({ theme, color }) => color || theme.palette.normal.normal};
`;
