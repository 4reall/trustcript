import styled from '@emotion/styled';
import { theme } from 'src/common/styles/theme';
import convertUnits from 'src/common/utils/helpers/convertUnits';
import {
	convertSpacing,
	SpacingArray,
} from 'src/common/utils/helpers/convertSpacing';
import { css } from '@emotion/react';
import { CSSProperties } from 'react';

export type TypographyVariant = keyof typeof theme.typography;

export interface TypographyProps {
	m?: SpacingArray;
	p?: SpacingArray;
	variant: TypographyVariant;
	bold?: boolean;
	color?: CSSProperties['color'];
	uppercase?: boolean;
	underline?: boolean;
	align?: CSSProperties['textAlign'];
	display?: CSSProperties['display'];
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
		color: ${color || theme.palette.normal.normal};
	`}
`;
