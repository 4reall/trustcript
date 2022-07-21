import {
	BurgerBar,
	BurgerContainer,
} from 'components/Header/components/Burger/Burger.styles';

interface BurgerProps {
	active: boolean;
	onClick: () => void;
}

const Burger = ({ active, onClick }: BurgerProps) => {
	return (
		<BurgerContainer active={active} onClick={onClick}>
			<BurgerBar />
			<BurgerBar />
			<BurgerBar />
		</BurgerContainer>
	);
};

export default Burger;
