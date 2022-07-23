import { css, CSSProp, DefaultTheme } from 'styled-components';
import { mediaQueries } from '../constants/mediaQueries';

interface MediaQueriesProps {
	theme?: DefaultTheme;
	prop: CSSProp;
	styles: number | string | Array<number | string>;
	variant?: 'up' | 'down';
}

export const mq = ({ prop, styles, variant = 'up' }: MediaQueriesProps) => {
	if (!Array.isArray(styles)) return styles;
	css`
		& ${mediaQueries[variant].xs} {
			${prop}:${styles[0]};
		}
		& ${mediaQueries[variant].sm} {
			${prop}:${styles[1]};
		}
		& ${mediaQueries[variant].md} {
			${prop}:${styles[2]};
		}
		& ${mediaQueries[variant].lg} {
			${prop}:${styles[3]};
		}
		& ${mediaQueries[variant].xl} {
			${prop}:${styles[4]};
		}
		& ${mediaQueries[variant].xxl} {
			${prop}:${styles[5]};
		}
	`;
};
