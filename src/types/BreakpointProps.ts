export type BreakpointProps<T> = Partial<
	Record<keyof T, Array<string | number | null> | T[keyof T]>
>;
// export type BreakpointProps<T> = Partial<Array<T[keyof T]>>;
