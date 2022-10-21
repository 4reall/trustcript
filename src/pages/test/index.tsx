import { PathsEnum } from '@/common/utils/constants/paths';
import { GetStaticPropsContext } from 'next';
import { INavLink } from '@/common/types/INavLink';

const navLinks: INavLink[] = [
	{ title: 'home', href: PathsEnum.Main },
	{ title: 'blog', href: PathsEnum.Blog },
	{ title: 'products', href: PathsEnum.Products },
];

const Index = () => {
	return <div></div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`public/locales/${locale}.json`)).default,
		},
	};
}

export default Index;
