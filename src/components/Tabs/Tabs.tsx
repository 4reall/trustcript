import { Cards, TabsContainer } from 'components/Tabs/Tabs.styles';
import Card, { ICard } from 'components/Card/Card';
import Filters, { IFilter } from 'components/Filters/Filters';
import Carousel from 'components/Carousel/Carousel';
import { Image } from 'components/layout/Image.styles';
import Knight from 'assets/images/knight.png';
import Rook from 'assets/images/rook.png';
import Pawn from 'assets/images/pawn.png';
import { useState } from 'react';

interface TabsProps {
	cards: ICard[];
	filters: IFilter[];
}

const Tabs = ({ cards, filters }: TabsProps) => {
	const [page, setPage] = useState(1);

	return (
		<TabsContainer>
			<Cards>
				{cards.map((card, i) => (
					<Card key={i} {...card} />
				))}
			</Cards>
		</TabsContainer>
	);
};

export default Tabs;
