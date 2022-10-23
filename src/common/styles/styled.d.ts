import { theme } from 'src/common/styles/theme';

type ITheme = typeof theme;

declare module '@emotion/react' {
	export interface Theme extends ITheme {}
}
