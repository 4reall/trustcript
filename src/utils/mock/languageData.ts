import { KeysOfUnion } from 'types/Keys';

export type LanguageDataKeys = keyof typeof languageData;

export type LanguageSectionKeys = KeysOfUnion<
	typeof languageData[LanguageDataKeys]
>;

export enum LanguagesEnum {
	RU = 'ru',
	UK = 'uk',
}

export const languageData = {
	navigation: {
		home: {
			[LanguagesEnum.RU]: 'главная',
			[LanguagesEnum.UK]: 'home',
		},
		blog: {
			[LanguagesEnum.RU]: 'блог',
			[LanguagesEnum.UK]: 'blog',
		},
		products: {
			[LanguagesEnum.RU]: 'продукты',
			[LanguagesEnum.UK]: 'products',
		},
	},
	promo: {
		title: {
			[LanguagesEnum.RU]:
				'Передовая кибербезопасность для любой компании',
			[LanguagesEnum.UK]: 'Advanced cyber security form any company',
		},
		text: {
			[LanguagesEnum.RU]:
				'Защитите ваш бизнес от всех видов киберугроз с помощью решений мирового класса.',
			[LanguagesEnum.UK]:
				'Protect your business from all kinds of cyber threats with world-class solutions.',
		},
		button: {
			[LanguagesEnum.RU]: 'Подробнее',
			[LanguagesEnum.UK]: 'More',
		},
	},
	slides: {
		title: {
			[LanguagesEnum.RU]: 'Кибербезопасноть нового поколения',
			[LanguagesEnum.UK]: 'Cybersecurity of new generation',
		},
		text: {
			[LanguagesEnum.RU]:
				'Масштабируемая защита от самых сложных киберугроз, учитывающая потребности вашего бизнеса.',
			[LanguagesEnum.UK]:
				'Scalable protection against the most complex cyber threats, adapted to your business requirements.',
		},
	},
	tools: {
		title: {
			[LanguagesEnum.RU]: 'Инструменты',
			[LanguagesEnum.UK]: 'Tools',
		},
		text: {
			[LanguagesEnum.RU]:
				'Тестирование на проникновение позволяет ответить на вопрос, как кто-то со злым умыслом может вмешаться в вашу сеть.',
			[LanguagesEnum.UK]:
				'Penetration testing allows you to answer the question of how someone with malicious intent can interfere with your network.',
		},
	},
	benefits: {
		title: {
			[LanguagesEnum.RU]:
				'Наши продукты направлены на вашу безопасность.',
			[LanguagesEnum.UK]:
				'Our products are designed to help you stay safe.',
		},
		text: {
			[LanguagesEnum.RU]:
				'Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.',
			[LanguagesEnum.UK]:
				'We follow a simple principle in our work: to detect and block any malicious attack.',
		},
		card1: {
			[LanguagesEnum.RU]: 'Анонимность',
			[LanguagesEnum.UK]: 'Anonymity',
		},
		card2: {
			[LanguagesEnum.RU]: 'Проверка на наличие угроз',
			[LanguagesEnum.UK]: 'Threat check',
		},
		card3: {
			[LanguagesEnum.RU]: 'Обнаружение и предотвращение атак',
			[LanguagesEnum.UK]: 'Detect and prevent attack',
		},
	},
	form: {
		name: {
			[LanguagesEnum.RU]: 'Как к Вам обращаться?',
			[LanguagesEnum.UK]: 'What would you like to be called?',
		},
		company: {
			[LanguagesEnum.RU]: 'Какую компанию Вы представляете?',
			[LanguagesEnum.UK]: 'What company do you represent?',
		},
		email: {
			[LanguagesEnum.RU]: 'Адрес электронной почты',
			[LanguagesEnum.UK]: 'Your e-mail address',
		},
		message: {
			[LanguagesEnum.RU]: 'Введите ваше сообщение',
			[LanguagesEnum.UK]: 'Enter your message',
		},
		personal: {
			[LanguagesEnum.RU]: 'Я согласен на обработку персональных данных',
			[LanguagesEnum.UK]: 'I accept the handling of personal data',
		},
		button: {
			[LanguagesEnum.RU]: 'Отправить данные',
			[LanguagesEnum.UK]: 'Submit',
		},
	},

	contacts: {
		title: {
			[LanguagesEnum.RU]:
				'Вы можете связаться с нами удобным для Вас способом.',
			[LanguagesEnum.UK]: 'You can contact us in a convenient way.',
		},
		address: {
			[LanguagesEnum.RU]: 'Ленинградский пр-т., 27, к2',
			[LanguagesEnum.UK]: 'Leningradskiy Avenue, 27с2',
		},
		tel: {
			[LanguagesEnum.RU]: '+7 (495) 000 - 00 - 00',
			[LanguagesEnum.UK]: '+7 (495) 000 - 00 - 00',
		},
		email: {
			[LanguagesEnum.RU]: 'admin@trustcrypt.com',
			[LanguagesEnum.UK]: 'admin@trustcrypt.com',
		},
	},
	products: {
		title: {
			[LanguagesEnum.RU]: 'Наши продукты',
			[LanguagesEnum.UK]: 'Our products',
		},
		text: {
			[LanguagesEnum.RU]:
				'Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.',
			[LanguagesEnum.UK]: 'You can contact us in a convenient way.',
		},
	},
	errors: {
		nameMin: {
			[LanguagesEnum.RU]: 'Минимальная длина 2 символа',
			[LanguagesEnum.UK]: 'Minimal length is 2 characters',
		},
		nameMax: {
			[LanguagesEnum.RU]: 'Максимальная длина 20 символов',
			[LanguagesEnum.UK]: 'Maximal length is 20 characters',
		},
		companyMin: {
			[LanguagesEnum.RU]: 'Минимальная длина 2 символа',
			[LanguagesEnum.UK]: 'Minimal length is 2 characters',
		},
		companyMax: {
			[LanguagesEnum.RU]: 'Максимальная длина 40 символов',
			[LanguagesEnum.UK]: 'Maximal length is 40 characters',
		},
		email: {
			[LanguagesEnum.RU]: 'Введите корректный адресс электронной почты',
			[LanguagesEnum.UK]: 'Enter the correct e-mail address',
		},
		messageMin: {
			[LanguagesEnum.RU]: 'Минимальная длина 2 символа',
			[LanguagesEnum.UK]: 'Minimal length is 10 characters',
		},
		messageMax: {
			[LanguagesEnum.RU]: 'Максимальная длина 300 символов',
			[LanguagesEnum.UK]: 'Maximal length is 300 characters',
		},
		personal: {
			[LanguagesEnum.RU]:
				'Необходимо разрешщение на обработку персональных данных',
			[LanguagesEnum.UK]:
				'You should accept the handling of personal data',
		},
		required: {
			[LanguagesEnum.RU]: 'Обязательное поле',
			[LanguagesEnum.UK]: 'Required',
		},
	},
};
