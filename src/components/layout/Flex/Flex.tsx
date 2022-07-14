import { Row, RowProps } from './Flex.styles';
import { PropsWithChildren, ReactNode } from 'react';

interface FlexProps extends RowProps {
	children: ReactNode;
}

const Flex = ({ children, ...props }: FlexProps) => {
	return <Row {...props}>{children}</Row>;
};

export default Flex;
