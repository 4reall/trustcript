import {
	BreakpointNamesEnum,
	BreakpointValuesEnum,
} from 'utils/constants/breakpoints';

export const queries = {
	down: {
		xs: `(max-width: ${BreakpointValuesEnum.xs})`,
		sm: `(max-width: ${BreakpointValuesEnum.sm})`,
		md: `(max-width: ${BreakpointValuesEnum.md})`,
		lg: `(max-width: ${BreakpointValuesEnum.lg})`,
		xl: `(max-width: ${BreakpointValuesEnum.xl})`,
		xxl: `(max-width: ${BreakpointValuesEnum.xxl})`,
	} as const,
	up: {
		xs: `(min-width: ${BreakpointValuesEnum.xs})`,
		sm: `(min-width: ${BreakpointValuesEnum.sm})`,
		md: `(min-width: ${BreakpointValuesEnum.md})`,
		lg: `(min-width: ${BreakpointValuesEnum.lg})`,
		xl: `(min-width: ${BreakpointValuesEnum.xl})`,
		xxl: `(min-width: ${BreakpointValuesEnum.xxl})`,
	} as const,
};

export const mediaQueries = {
	down: {
		xs: `@media ${queries.down.xs}`,
		sm: `@media ${queries.down.sm}`,
		md: `@media ${queries.down.md}`,
		lg: `@media ${queries.down.lg}`,
		xl: `@media ${queries.down.xl}`,
		xxl: `@media ${queries.down.xxl}`,
	} as const,
	up: {
		xs: `@media ${queries.up.xs}`,
		sm: `@media ${queries.up.sm}`,
		md: `@media ${queries.up.md}`,
		lg: `@media ${queries.up.lg}`,
		xl: `@media ${queries.up.xl}`,
		xxl: `@media ${queries.up.xxl}`,
	} as const,
};
