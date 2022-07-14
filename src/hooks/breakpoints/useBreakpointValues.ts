import useBreakpoints from './useBreakpoints';

const findNearestLowerBreakpoint = (breakpoints: any, current: any) => {
	let iterator = current - 1;
	while (!breakpoints[iterator] && iterator > 0) {
		iterator--;
	}
	return breakpoints[iterator];
};

const useBreakpointValues = <T>(breakpointValues: Array<T | null> | T) => {
	const { active } = useBreakpoints();

	let breakpointValue = null;

	if (!Array.isArray(breakpointValues)) breakpointValue = breakpointValues;
	else if (breakpointValues.length - 1 < active)
		// when the current breakpoint is bigger than the passed array,
		// the biggest breakpoint is the last breakpoint
		breakpointValue = breakpointValues[breakpointValues.length - 1];
	else if (breakpointValues[active] === null)
		// if current breakpoint is missed
		breakpointValue = findNearestLowerBreakpoint(breakpointValues, active);
	else breakpointValue = breakpointValues[active];

	return breakpointValue;
};
export default useBreakpointValues;
