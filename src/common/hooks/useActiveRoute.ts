import { useRouter } from 'next/router';
import { UrlObject } from 'url';

export const useActiveRoute = (route: string | UrlObject): boolean => {
	const router = useRouter();

	return router.pathname === route;
};
