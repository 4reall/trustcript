import { ColProps, GridStyles, GridStylesProps } from './Grid.styles';
import { PropsWithChildren, ReactNode } from 'react';

const Grid = ({
	children,
	...props
}: PropsWithChildren<GridStylesProps | ColProps>) => {
	return <div></div>;
};

export default Grid;
