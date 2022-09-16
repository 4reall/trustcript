import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

import { Grid, CardsContainer } from 'components/_layout/Cards/Cards.styles';
import { Children, PropsWithChildren } from 'react';

interface TabsProps<T> {}

const Cards = ({ children }: PropsWithChildren<{}>) => {
	return (
		<CardsContainer>
			<Grid>
				<TransitionGroup appear exit={false} component={null}>
					{Children.map(children, (child) => (
						<CSSTransition
							timeout={500}
							classNames="card"
							key={uuid()}
						>
							{child}
						</CSSTransition>
					))}
				</TransitionGroup>
			</Grid>
		</CardsContainer>
	);
};

export default Cards;
