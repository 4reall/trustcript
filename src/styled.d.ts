import 'styled-components';
import { theme } from './theme';

type ITheme = typeof theme;

declare module 'styled-components' {
	interface DefaultTheme extends ITheme {}
}
