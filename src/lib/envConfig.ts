const getEnvironmentVariable = (
	unvalidatedEnvironmentVariable?: string
): string => {
	if (!unvalidatedEnvironmentVariable) {
		throw new Error(
			`Couldn't find environment variable: ${unvalidatedEnvironmentVariable}`
		);
	} else {
		return unvalidatedEnvironmentVariable;
	}
};

export const envConfig = {
	baseUrl: getEnvironmentVariable(process.env.NEXT_PUBLIC_BASE_URL),
};
