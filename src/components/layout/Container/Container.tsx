import { ContainerStyles, ContainerStylesProps } from './Container.styles';
import { FC, ReactNode } from 'react';
import useBreakpointValues from 'hooks/breakpoints/useBreakpointValues';
import { BreakpointNames } from 'utils/constants/breakpoints';

interface ContainerProps {
	children: ReactNode;
	maxWidth: (BreakpointNames | null)[];
}

const Container = ({ children, maxWidth }: ContainerProps) => {
	const appliedMaxWidth = useBreakpointValues<BreakpointNames>(maxWidth);
	return (
		<ContainerStyles maxWidth={appliedMaxWidth}>{children}</ContainerStyles>
	);
};

export default Container;
