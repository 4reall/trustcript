import { css } from 'styled-components';
import convertUnits from 'utils/helpers/convertUnits';

export interface Padding {
	p?: string | number | Array<string | number>;
	pt?: string | number | Array<string | number>;
	pr?: string | number | Array<string | number>;
	pb?: string | number | Array<string | number>;
	pl?: string | number | Array<string | number>;
	px?: string | number | Array<string | number>;
	py?: string | number | Array<string | number>;
}

export const paddingMixin = (padding: Padding) => {
	if (!padding) return '';
	const { p, pt, pr, pb, pl, px, py } = Object.fromEntries(
		Object.entries(padding).map(([k, v]) => [k, convertUnits(v)])
	);
	return css`
		padding: ${p};
		padding: ${py} ${py ? 0 : ''};
		padding: ${px ? 0 : ''} ${px};
		padding-top: ${pt};
		padding-right: ${pr};
		padding-bottom: ${pb};
		padding-left: ${pl};
	`;
};
