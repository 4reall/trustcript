import convertUnits from '@/utils/helpers/convertUnits';

export type SpacingArray = Array<string | number>;

export const convertSpacing = (array?: SpacingArray): string | undefined => {
	if (!array) return;

	const convertedArr: SpacingArray = [];

	array.forEach((value) => {
		const convertedValue = convertUnits(value);
		if (convertedValue) convertedArr.push(convertedValue);
	});

	const [v1, v2, v3, v4] = convertedArr;

	switch (convertedArr.length) {
		case 0:
			return `0`;
		case 1:
			return `${v1}`;
		case 2:
			return `${v1} ${v2}`;
		case 3:
			return `${v1} ${v2} ${v3}`;
		case 4:
			return `${v1} ${v2} ${v3} ${v4}`;
		default:
			return `0`;
	}
};
