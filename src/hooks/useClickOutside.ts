import { RefObject, useEffect } from 'react';
import { assertIsNode } from 'utils/helpers/assertIsNode';

export const useClickOutside = (ref: RefObject<any>, callback: () => void) => {
	const handleClick = ({ target }: MouseEvent): void => {
		assertIsNode(target);
		if (ref.current && !ref.current.contains(target)) {
			callback();
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
};
