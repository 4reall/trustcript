import Image from '../layout/Image/Image';

import Ru from 'assets/icons/countries/ru.svg';
import { LanguageStyles, LanguageStylesProps } from './Language.styles';

interface LanguageProps extends LanguageStylesProps {}

const Language = ({ ...props }: LanguageProps) => {
	return (
		<LanguageStyles {...props}>
			<Image w={'1rem'} h={'1rem'} alt="ru" src={Ru} />
		</LanguageStyles>
	);
};

export default Language;
