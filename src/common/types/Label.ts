import { IImage } from '@/common/types/Image';
import { ReactNode } from 'react';

export interface ILabel {
	icon: IImage;
	text: string | number;
}
