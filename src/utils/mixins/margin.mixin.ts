import { MarginEnum } from '../constants/spacing';
import convertUnits from '../helpers/convertUnits';
import { css } from 'styled-components';
import { BreakpointProps } from '../../types/BreakpointProps';

export interface Margin {
	m?: string | number | Array<string | number>;
	mt?: string | number | Array<string | number>;
	mr?: string | number | Array<string | number>;
	mb?: string | number | Array<string | number>;
	ml?: string | number | Array<string | number>;
	mx?: string | number | Array<string | number>;
	my?: string | number | Array<string | number>;
}

export const marginMixin = (padding: Margin) => {
	if (!padding) return '';
	const { m, mt, mr, mb, ml, mx, my } = Object.fromEntries(
		Object.entries(padding).map(([k, v]) => [k, convertUnits(v)])
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
