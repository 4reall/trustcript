export const convertViews = (views: number) => {
	if (views > 1000) return views / 1000 + 'K';
	else return views;
};
