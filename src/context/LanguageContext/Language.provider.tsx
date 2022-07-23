import { PropsWithChildren, useState } from 'react';

import { languageContext } from 'context/LanguageContext/Language.context';

import { LanguageOption } from 'context/LanguageContext/Language.context';
import { LanguagesEnum } from 'utils/constants/languageData';

import Ru from 'assets/icons/countries/ru.svg';

const { Provider } = languageContext;

const LanguageContextProvider = ({ children }: PropsWithChildren<{}>) => {
	const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>({
		id: 0,
		language: LanguagesEnum.RU,
		thumbnail: Ru,
	});

	return (
		<Provider value={{ selectedLanguage, setSelectedLanguage }}>
			{children}
		</Provider>
	);
};

export default LanguageContextProvider;
