import { ImgHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { ImageWrapper, ImageWrapperProps } from './Image.styles';

interface ImageProps extends ImgHTMLAttributes<any>, ImageWrapperProps {
	alt: string;
	src: string;
	// children: ReactNode;
}

const Image = ({
	children,
	alt,
	src,
	h,
	w,
	margin,
	padding,
	...props
}: ImageProps) => {
	return (
		<ImageWrapper h={h} w={w} margin={margin} padding={padding}>
			<img alt={alt} src={src} {...props} />
		</ImageWrapper>
	);
};

export default Image;
