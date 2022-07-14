export enum BreakpointNamesEnum {
	xs,
	sm,
	md,
	lg,
	xl,
	xxl,
}

export enum BreakpointValuesEnum {
	xs = '20em',
	sm = '35em',
	md = '48em',
	lg = '62em',
	xl = '75em',
	xxl = '120em',
}

export type BreakpointNames = keyof typeof BreakpointNamesEnum;
