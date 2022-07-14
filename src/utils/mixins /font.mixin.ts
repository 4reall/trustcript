import { css } from 'styled-components';
import { theme } from 'theme';

export type TypographyVariant = keyof typeof theme.typography;

export interface FontMixinProps {
	theme: typeof theme;
	variant: TypographyVariant | undefined;
}

export const fontMixin = ({ theme, variant }: FontMixinProps) => {
	if (!variant) return '';
	const t = theme.typography[variant];
	return css`
		font-size: ${t.fontSize};
		font-family: ${t.fontFamily};
		font-weight: ${t.fontWeight};
		color: ${t.color};
	`;
};
