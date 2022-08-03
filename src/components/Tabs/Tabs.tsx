import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

import { Cards, TabsContainer } from 'components/Tabs/Tabs.styles';
import ProductCard from 'components/Card/ProductCard';

interface TabsProps<T> {
	cards: T[];
	render: (props: T) => JSX.Element;
}

const Tabs = <T,>({ cards, render }: TabsProps<T>) => {
	return (
		<TabsContainer>
			<Cards>
				<TransitionGroup appear exit={false} component={null}>
					{cards.map((card) => (
						<CSSTransition
							timeout={500}
							classNames="card"
							key={uuid()}
						>
							{/*<ProductCard {...card} />*/}
							{render(card)}
						</CSSTransition>
					))}
				</TransitionGroup>
			</Cards>
		</TabsContainer>
	);
};

export default Tabs;
