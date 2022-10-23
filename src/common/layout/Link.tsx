import { PropsWithChildren } from 'react';
import LinkNext, { LinkProps } from 'next/link';

const Link = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
	return (
		<LinkNext {...props}>
			<a>{children}</a>
		</LinkNext>
	);
};

export default Link;
