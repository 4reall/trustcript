export interface ITypographyData {
	promo: {
		title: string;
		text: string;
		button: string;
	};
	slides: {
		title: string;
		text: string;
	};
	tools: {
		title: string;
		text: string;
	};
	benefits: {
		title: string;
		text: string;
		card1: string;
		card2: string;
		card3: string;
	};
	form: {
		name: string;
		company: string;
		email: string;
		message: string;
		personal: string;
		button: string;
	};
	contacts: {
		title: string;
		address: string;
		tel: string;
		email: string;
	};
	validationMessages: {
		nameMin: string;
		nameMax: string;
		companyMin: string;
		companyMax: string;
		email: string;
		messageMin: string;
		messageMax: string;
		personal: string;
		required: string;
	};
}
