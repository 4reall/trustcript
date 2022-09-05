import Header from 'components/Header/Header';
import { Routes as RoutesDOM } from 'react-router/lib/components';
import { Outlet, Route } from 'react-router-dom';
import { PathsEnum } from 'utils/constants/paths';
import MainPage from 'pages/Main/MainPage';
import BlogPage from 'pages/Blog/BlogPage';
import ArticlePage from 'pages/Article/ArticlePage';
import ProductsPage from 'pages/Products/ProductsPage';
import ProductPage from 'pages/Product/ProductPage';
import Footer from 'components/Footer/Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
