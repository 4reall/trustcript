import { ContainerStyles, ContainerStylesProps } from './Container.styles';
import { FC, ReactNode } from 'react';
import useBreakpointValues from 'hooks/breakpoints/useBreakpointValues';
import { BreakpointNames } from 'utils/constants/breakpoints';
import { BreakpointProps } from '../../../types/BreakpointProps';

interface ContainerProps extends ContainerStylesProps {
	children: ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
	// const appliedProps = useBreakpointValues({ ...props });
	return <ContainerStyles {...props}>{children}</ContainerStyles>;
};

export default Container;
