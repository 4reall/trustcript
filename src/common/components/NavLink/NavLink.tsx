import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface NavLinkBaseProps {
	className?: (isActive: boolean) => string;
}

type NavLinkProps = PropsWithChildren<LinkProps & NavLinkBaseProps>;

const NavLink = ({ children, className, ...props }: NavLinkProps) => {
	const { pathname } = useRouter();
	return (
		<Link {...props}>
			<a className={className && className(pathname === props.href)}>
				{children}
			</a>
		</Link>
	);
};

export default NavLink;
