import { PathsEnum } from 'src/common/utils/constants/paths';
import { GetStaticPropsContext } from 'next';
import { INavLink } from 'src/common/types/INavLink';
import CardSkeleton from 'src/common/layout/Card/CardSkeleton';
import Cards from 'src/common/layout/Cards/Cards';
import Card from 'src/common/layout/Card/Card';
import Image from 'next/image';
import Glass from 'public/assets/images/thumbnails/glass.webp';
import Pagination from 'src/common/components/Pagination/Pagination';
import { useState } from 'react';
import TestComponent from 'src/modules/Test/TestComponent';

const Index = () => {
	return (
		<Cards>
			<TestComponent />
		</Cards>
	);
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`public/locales/${locale}.json`)).default,
		},
	};
}

export default Index;
