/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		emotion: true,
	},
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'ru',
	},
};

module.exports = nextConfig;
