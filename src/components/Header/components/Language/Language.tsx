import Ru from 'assets/icons/countries/ru.svg';
import Uk from 'assets/icons/countries/uk.svg';
import Arrow from 'assets/icons/labels/Vector.svg';
import {
	LanguageMenu,
	LanguageStyles,
	LanguageStylesProps,
} from './Language.styles';
import { useRef, useState } from 'react';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
// import Label from './Label';
import { useClickOutside } from 'hooks/useClickOutside';
import { Image } from 'components/layout/Image.styles';
import { stat } from 'fs';

export interface ILabel {
	name: string;
	alt: string;
	src: string;
}

interface LanguageProps extends LanguageStylesProps {
	labels: ILabel[];
}

const labels = [
	{ name: 'ru', alt: 'ru icon', src: Ru },
	{ name: 'uk', alt: 'ru icon', src: Uk },
];

// const labels = [
// 	{ component: <Label name="ru" alt="ru icon" src={Ru} /> },
// 	{ component: <Label name="uk" alt="ru icon" src={Uk} /> },
// ];

const Language = ({ labels, ...props }: LanguageProps) => {
	const [active, setActive] = useState(false);
	const [activeLabel, setActiveLabel] = useState(labels[0]);
	const ref = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		setActive(!active);
	};

	const handleClose = () => {
		setActive(false);
	};

	useClickOutside(ref, handleClose);

	return (
		<LanguageStyles ref={ref} {...props} onClick={handleClick}>
			{/*<Label name="ru" alt="ru icon" src={Ru} />*/}
			<Image w={'1rem'} h={'1rem'} alt="arrow" src={Arrow} />
			<DropdownMenu active={active}>
				{/*<LanguageMenu>*/}
				{/*	{labels.map((label) => (*/}
				{/*		<Label {...label} isMenu />*/}
				{/*	))}*/}
				{/*</LanguageMenu>*/}
			</DropdownMenu>
		</LanguageStyles>
	);
};

export default Language;
