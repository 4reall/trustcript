const convertUnits = (unit?: string | number) => {
	if (!unit) return;
	if (typeof unit === 'string') {
		const matched =
			/^(-?(\d*\.)?\d+)((px)|(em)|(%)|(ex)|(ch)|(rem)|(vw)|(vh)|(vmin)|(vmax)|(cm)|(mm)|(in)|(pt)|(pc))$/gim.test(
				unit
			);
		return matched ? unit : '';
	}
	return unit > 1 ? unit + 'px' : unit * 100 + '%';
};

export default convertUnits;
