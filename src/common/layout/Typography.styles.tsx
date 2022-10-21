import styled from '@emotion/styled';
import { theme } from '@/common/styles/theme';
import convertUnits from '@/common/utils/helpers/convertUnits';
import {
	convertSpacing,
	SpacingArray,
} from '@/common/utils/helpers/convertSpacing';
import { css } from '@emotion/react';

export type TypographyVariant = keyof typeof theme.typography;

export interface TypographyProps {
	m?: SpacingArray;
	p?: SpacingArray;
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
		theme,
		m,
		p,
		align,
		uppercase,
		color,
		bold,
		variant,
		underline,
		display,
	}) => css`
		display: ${display};
		margin: ${m ? convertSpacing(m) : ''};
		margin: ${p ? convertSpacing(p) : ''};
		font-size: ${theme.typography[variant].fontSize};
		font-family: ${theme.typography[variant].fontFamily};
		font-weight: ${bold ? 700 : 500};
		line-height: ${theme.typography[variant].lineHeight};
		text-transform: ${uppercase && 'uppercase'};
		text-decoration: ${underline && 'underline'};
		text-align: ${align};
		color: ${color || ''};
	`}
`;
