import { Navigate, Route, Routes as RoutesDOM } from 'react-router-dom';

import BlogPage from 'pages/Blog/BlogPage';
import ArticlePage from 'pages/Article/ArticlePage';
import ProductsPage from 'pages/Products/ProductsPage';
import ProductPage from 'pages/Product/ProductPage';
import MainPage from 'pages/Main/MainPage';

import { PathsEnum } from 'utils/constants/paths';
import Layout from 'components/_layout/Layout';

const routes = [
	{ path: PathsEnum.Main, element: <MainPage /> },
	{ path: PathsEnum.Blog, element: <BlogPage /> },
	{ path: PathsEnum.Article, element: <ArticlePage /> },
	{ path: PathsEnum.Products, element: <ProductsPage /> },
	{ path: PathsEnum.Product, element: <ProductPage /> },
];

const Routes = () => {
	return (
		<RoutesDOM>
			<Route path={PathsEnum.Base}>
				<Route index element={<Navigate to={PathsEnum.Main} />} />
				<Route
					path={PathsEnum.NotFound}
					element={<Navigate to={PathsEnum.Main} />}
				/>
			</Route>

			<Route path={PathsEnum.Main} element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path={PathsEnum.Blog}>
					<Route index element={<BlogPage />} />
					<Route path={PathsEnum.Article} element={<ArticlePage />} />
				</Route>
				<Route path={PathsEnum.Products}>
					<Route index element={<ProductsPage />} />
					<Route path={PathsEnum.Product} element={<ProductPage />} />
				</Route>
			</Route>
		</RoutesDOM>
	);
};

export default Routes;
