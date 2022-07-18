import {
	Context,
	ContextType,
	createContext,
	Dispatch,
	SetStateAction,
} from 'react';
import { LanguagesEnum } from 'utils/constants/languages';

export interface LanguageOption {
	id: string | number;
	language: LanguagesEnum;
	thumbnail: string;
}

export interface LanguageContext {
	selectedLanguage: LanguageOption;
	setSelectedLanguage: Dispatch<SetStateAction<LanguageOption>>;
}

export const languageContext = createContext<LanguageContext>({
	selectedLanguage: {
		id: 0,
		language: LanguagesEnum.RU,
		thumbnail: '',
	},
	setSelectedLanguage: (index) => {},
});
