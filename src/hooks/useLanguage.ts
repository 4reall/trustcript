import { useCallback, useContext } from 'react';
import { languageContext } from 'context/LanguageContext/Language.context';
import {
	languageData,
	LanguageDataKeys,
	LanguageSectionKeys,
} from 'utils/constants/languageData';

export const useLanguage = (section: LanguageDataKeys) => {
	const { selectedLanguage, setSelectedLanguage } =
		useContext(languageContext);

	return {
		text: useCallback(
			(element: LanguageSectionKeys) =>
				// @ts-ignore
				languageData[section][element][selectedLanguage.language],
			[selectedLanguage]
		),
		selectedLanguage,
		setSelectedLanguage,
	};
};
