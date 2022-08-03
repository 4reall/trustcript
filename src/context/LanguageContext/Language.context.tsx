import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import { LanguagesEnum } from 'utils/mock/languageData';
import { ReactComponent as Ru } from 'assets/icons/countries/ru.svg';

export interface LanguageOption {
	id: string | number;
	language: LanguagesEnum;
	thumbnail: ReactNode;
}

export interface LanguageContext {
	selectedLanguage: LanguageOption;
	setSelectedLanguage: Dispatch<SetStateAction<LanguageOption>>;
}

export const languageContext = createContext<LanguageContext>({
	selectedLanguage: {
		id: 0,
		language: LanguagesEnum.RU,
		thumbnail: <Ru alt={'ru icon'} />,
	},
	setSelectedLanguage: () => {},
});
