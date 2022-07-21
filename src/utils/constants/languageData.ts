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
};
