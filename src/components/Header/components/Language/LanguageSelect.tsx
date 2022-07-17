import { useCallback, useMemo, useState } from 'react';

import Ru from 'assets/icons/countries/ru.svg';
import Uk from 'assets/icons/countries/uk.svg';
import { CustomSelect } from 'components/Header/components/Language/Language.styles';
import { Select, Theme } from 'react-functional-select';
import useBreakpointValues from 'hooks/breakpoints/useBreakpointValues';
import { useTheme } from 'styled-components';
import { LanguageOption } from 'components/Header/components/Language/LanguageOption';

export interface IOption {
	value: string;
	label: string;
	src: string;
	alt: string;
}

const options = [
	{ value: 'ru', label: 'ru', src: Ru, alt: 'ru icon' },
	{ value: 'uk', label: 'uk', src: Uk, alt: 'uk icon' },
];

const themeConfig = {};

const LanguageSelect = () => {

	return (
		<Select
			options={options}
			themeConfig={memoizedThemeConfig}
			renderOptionLabel={LanguageOption}
		/>
	);
};

export default LanguageSelect;
