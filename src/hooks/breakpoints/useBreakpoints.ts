import { queries } from 'utils/constants/mediaQueries';
import useMediaQuery from './useMediaQuery';
import { BreakpointNamesEnum } from 'utils/constants/breakpoints';

const useBreakpoints = (queryVariant: 'up' | 'down' = 'up') => {
	const breakpoints = {
		isXs: useMediaQuery(queries[queryVariant].xs),
		isSm: useMediaQuery(queries[queryVariant].sm),
		isMd: useMediaQuery(queries[queryVariant].md),
		isLg: useMediaQuery(queries[queryVariant].lg),
		isXl: useMediaQuery(queries[queryVariant].xl),
		isXxl: useMediaQuery(queries[queryVariant].xxl),
		active: BreakpointNamesEnum.xs,
	};

	if (breakpoints.isXs) breakpoints.active = BreakpointNamesEnum.xs;
	if (breakpoints.isSm) breakpoints.active = BreakpointNamesEnum.sm;
	if (breakpoints.isMd) breakpoints.active = BreakpointNamesEnum.md;
	if (breakpoints.isLg) breakpoints.active = BreakpointNamesEnum.lg;
	if (breakpoints.isXl) breakpoints.active = BreakpointNamesEnum.xl;
	if (breakpoints.isXxl) breakpoints.active = BreakpointNamesEnum.xxl;

	return breakpoints;
};
export default useBreakpoints;
