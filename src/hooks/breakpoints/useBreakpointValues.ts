import useBreakpoints from './useBreakpoints';

const findNearestLowerBreakpoint = (breakpoints: any[], currIndex: any) => {
	let iterator = currIndex - 1;
	while (!breakpoints[iterator] && iterator > 0) {
		iterator--;
	}
	return breakpoints[iterator];
};
//
// const useBreakpointValues = <T>(breakpointValues: T) => {
// 	const { active } = useBreakpoints();
//
// 	const result: { [key in keyof T]: any } = breakpointValues;
//
// 	for (const breakpointValueKey in breakpointValues) {
// 		const value = breakpointValues[breakpointValueKey];
//
// 		if (
// 			typeof value === 'string' ||
// 			typeof value === 'number' ||
// 			!Array.isArray(value)
// 		)
// 			continue;
//
// 		if (value.length - 1 < active)
// 			// when the current breakpoint is bigger than the passed array,
// 			// the biggest breakpoint is the last breakpoint
// 			result[breakpointValueKey] = value[value.length - 1];
// 		else if (value[active] === null)
// 			// if current breakpoint is missed
// 			result[breakpointValueKey] = findNearestLowerBreakpoint(
// 				value,
// 				active
// 			);
// 		else result[breakpointValueKey] = value[active];
// 	}
//
// 	return result;
// };

const useBreakpointValues = <T>(breakpointValues: T) => {
	const { active } = useBreakpoints();

	const entries = Object.entries(breakpointValues).map(([k, value]) => {
		if (!Array.isArray(value)) return value;

		if (active < value.length) value = value[active];
		else if (typeof value[active] === null)
			value = findNearestLowerBreakpoint(value[active], active);
		else value = value[value.length - 1];

		return [k, value];
	});

	return Object.fromEntries(entries) as { [key in keyof T]: any };
};
export default useBreakpointValues;
