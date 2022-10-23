import { IImage } from 'src/common/types/Image';
import { ReactNode } from 'react';

export interface ILabel {
	icon: IImage;
	text: string | number;
}
