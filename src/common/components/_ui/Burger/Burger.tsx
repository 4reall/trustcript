import {
	BurgerBar,
	BurgerContainer,
} from '@/common/components/_ui/Burger/Burger.styles';
import { forwardRef } from 'react';

interface BurgerProps {
	active: boolean;
	onClick: () => void;
}

const Burger = forwardRef<HTMLButtonElement, BurgerProps>(
	({ active, onClick }, ref) => {
		return (
			<BurgerContainer ref={ref} active={active} onClick={onClick}>
				<BurgerBar />
				<BurgerBar />
				<BurgerBar />
			</BurgerContainer>
		);
	}
);

Burger.displayName = 'Burger';

export default Burger;
