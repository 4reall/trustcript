import { MarginEnum } from '../constants/spacing';
import convertUnits from '../helpers/convertUnits';
import { css } from 'styled-components';

export interface Margins {
	m?: string | number;
	mt?: string | number;
	mr?: string | number;
	mb?: string | number;
	ml?: string | number;
	mx?: string | number;
	my?: string | number;
}

export const marginMixin = (spacing: Margins) => {
	if (!spacing) return '';
	const { m, mt, mr, mb, ml, mx, my } = Object.fromEntries(
		Object.entries(spacing).map(([k, v]) => [k, convertUnits(v)])
	);
	return css`
		margin: ${m};
		margin: ${my} ${my ? 0 : ''};
		margin: ${mx ? 0 : ''} ${mx};
		margin-top: ${mt};
		margin-right: ${mr};
		margin-bottom: ${mb};
		margin-left: ${ml};
	`;
};
