import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import { LanguagesEnum } from '@/mock/languageData';
import Ru from '@/assets/icons/countries/ru.svg';
import Image from 'next/image';

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
		thumbnail: <Image src={Ru} alt={'ru icon'} />,
	},
	setSelectedLanguage: () => {},
});
