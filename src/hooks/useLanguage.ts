import { useContext } from 'react';
import { languageContext } from 'context/LanguageContext/Language.context';
import {
	languageData,
	LanguageDataKeys,
	LanguageSectionKeys,
} from 'utils/constants/languageData';
import { KeysOfUnion } from 'types/Keys';

export const useLanguage = (section: LanguageDataKeys) => {
	const { selectedLanguage, setSelectedLanguage } =
		useContext(languageContext);

	return {
		text: (element: LanguageSectionKeys) =>
			// @ts-ignore
			languageData[section][element][selectedLanguage.language],
		selectedLanguage,
		setSelectedLanguage,
	};
};
