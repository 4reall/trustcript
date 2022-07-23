import { Route, Routes as RoutesDOM } from 'react-router-dom';

import BlogPage from 'pages/Blog/BlogPage';
import ArticlePage from 'pages/Article/ArticlePage';
import ProductsPage from 'pages/Products/ProductsPage';
import ProductPage from 'pages/Product/ProductPage';
import MainPage from 'pages/Main/MainPage';

import { PathsEnum } from 'utils/constants/paths';

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
			{routes.map(({ path, element }, i) => (
				<Route path={path} element={element} key={i} />
			))}
		</RoutesDOM>
	);
};

export default Routes;
