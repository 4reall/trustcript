export interface ICard {
	id: number;
	images: { src: string; alt: string }[];
	category: string;
	title: string;
	description: string;
	link: {
		title: string;
		path: string;
	};
}
