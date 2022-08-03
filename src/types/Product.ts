import { IImage } from 'types/Image';

export interface IProduct {
	id: number;
	images: IImage[];
	category: string;
	title: string;
	description: string;
	link: {
		title: string;
		path: string;
	};
}
