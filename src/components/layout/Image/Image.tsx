import { ImgHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { ImageWrapper, ImageWrapperProps } from './Image.styles';

interface ImageProps extends ImgHTMLAttributes<any>, ImageWrapperProps {
	alt: string;
	src: string;
	// children: ReactNode;
}

const Image = ({ width, children, alt, src, ...props }: ImageProps) => {
	return (
		<ImageWrapper h={props.h} w={props.w}>
			<img alt={alt} src={src} {...props} />
		</ImageWrapper>
	);
};

export default Image;
