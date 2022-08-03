import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

import { Cards, TabsContainer } from 'components/Tabs/Tabs.styles';
import Card from 'components/Card/Card';

import { IProduct } from 'types/Product';

interface TabsProps {
	cards: IProduct[];
}

const Tabs = ({ cards }: TabsProps) => {
	return (
		<TabsContainer>
			<Cards>
				<TransitionGroup appear exit={false} component={null}>
					{cards.map((card) => (
						<CSSTransition
							timeout={500}
							classNames="card"
							key={card.id + uuid()}
						>
							<Card {...card} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</Cards>
		</TabsContainer>
	);
};

export default Tabs;
