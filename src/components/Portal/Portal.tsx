import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useState } from 'react';

interface PortalProps {
	children: ReactNode;
	position?: string;
	zIndex?: number;
}

const Portal = ({ children, zIndex }: PortalProps) => {
	const [container] = useState<HTMLElement>(() =>
		document.createElement('div')
	);

	useEffect(() => {
		// container.style.position = 'relative';
		// container.style.zIndex = `${zIndex}`;
		document.body.append(container);
		return () => {
			document.body.removeChild(container);
		};
	}, []);

	return createPortal(children, container);
};

export default Portal;
