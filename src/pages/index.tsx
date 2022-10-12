import { GetStaticPropsContext } from 'next';
import path from 'path';
import * as fs from 'fs';
import { ITypographyData } from '@/modules/Home';
import Home from '@/modules/Home/components/Home';

interface HomePageProps {
	typography: ITypographyData;
}

const HomePage = ({ typography }: HomePageProps) => {
	return <Home typography={typography} />;
};

export async function getStaticProps(context: GetStaticPropsContext) {
	const typographyPath = path.join(
		process.cwd(),
		`public/data/home/typography.${context.locale}.json`
	);
	const typography = fs.readFileSync(typographyPath, 'utf8');
	// console.log(context.locale);
	// console.log(typography);

	return {
		props: {
			typography: JSON.parse(typography) as ITypographyData,
		},
	};
}

export default HomePage;
