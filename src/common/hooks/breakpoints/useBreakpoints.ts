import { queries } from 'src/common/utils/constants/mediaQueries';
import useMediaQuery from 'src/common/hooks/breakpoints/useMediaQuery';
import { BreakpointValuesEnum } from 'src/common/utils/constants/breakpoints';

const useBreakpoints = (queryVariant: 'up' | 'down' = 'up') => {
	const breakpoints = {
		isXs: useMediaQuery(queries[queryVariant].xs),
		isSm: useMediaQuery(queries[queryVariant].sm),
		isMd: useMediaQuery(queries[queryVariant].md),
		isLg: useMediaQuery(queries[queryVariant].lg),
		isXl: useMediaQuery(queries[queryVariant].xl),
		isXxl: useMediaQuery(queries[queryVariant].xxl),
		active: BreakpointValuesEnum.xs,
	};

	if (breakpoints.isXs) breakpoints.active = BreakpointValuesEnum.xs;
	if (breakpoints.isSm) breakpoints.active = BreakpointValuesEnum.sm;
	if (breakpoints.isMd) breakpoints.active = BreakpointValuesEnum.md;
	if (breakpoints.isLg) breakpoints.active = BreakpointValuesEnum.lg;
	if (breakpoints.isXl) breakpoints.active = BreakpointValuesEnum.xl;
	if (breakpoints.isXxl) breakpoints.active = BreakpointValuesEnum.xxl;

	return breakpoints;
};
export default useBreakpoints;
