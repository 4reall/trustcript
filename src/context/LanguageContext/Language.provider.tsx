import { PropsWithChildren, useState } from 'react';
import {
	languageContext,
	LanguageOption,
} from 'context/LanguageContext/Language.context';
import Ru from 'assets/icons/countries/ru.svg';
import Uk from 'assets/icons/countries/uk.svg';
import { LanguagesEnum } from 'utils/constants/languageData';

const { Provider } = languageContext;

const options = [
	{ language: LanguagesEnum.RU, thumbnail: Ru },
	{ language: LanguagesEnum.UK, thumbnail: Uk },
];

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
