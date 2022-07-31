import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Cards, TabsContainer } from 'components/Tabs/Tabs.styles';
import Card from 'components/Card/Card';

import { ICard } from 'types/Card';

interface TabsProps {
	cards: ICard[];
}

const Tabs = ({ cards }: TabsProps) => {
	const navigate = useNavigate();

	const handleClick = (id: number) => {
		return () => {
			console.log(id);
			navigate(`${id}`);
		};
	};

	return (
		<TabsContainer>
			<Cards>
				<TransitionGroup appear exit={false} component={null}>
					{cards.map((card) => (
						<CSSTransition
							timeout={{
								appear: 1000,
								enter: 500,
							}}
							classNames="card"
							key={card.id}
						>
							<Card {...card} onClick={handleClick(card.id)} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</Cards>
		</TabsContainer>
	);
};

export default Tabs;
