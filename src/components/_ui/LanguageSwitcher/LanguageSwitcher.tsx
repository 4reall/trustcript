import { useContext, useRef, useState } from 'react';

import { Img } from 'components/_layout/Img.styles';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import {
	LanguageMenu,
	Switcher,
} from 'components/_ui/LanguageSwitcher/LanguageSwitcher.styles';
import LanguageLabel from 'components/_ui/LanguageSwitcher/LanguageLabel';

import { LanguageOption } from 'context/LanguageContext/Language.context';

import { languageContext } from 'context/LanguageContext/Language.context';
import { useClickOutside } from 'hooks/useClickOutside';

import BottomArrow from 'assets/icons/arrows/BottomArrow.svg';

interface LanguageSwitcherProps {
	options: LanguageOption[];
}

const LanguageSwitcher = ({ options }: LanguageSwitcherProps) => {
	const { selectedLanguage, setSelectedLanguage } =
		useContext(languageContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleSelect = (optionIndex: number) => {
		if (options[optionIndex].id === selectedLanguage.id) return;
		return () => setSelectedLanguage(options[optionIndex]);
	};
	useClickOutside(containerRef, () => setIsMenuOpen(false));

	return (
		<Switcher ref={containerRef} onClick={handleClick}>
			<LanguageLabel {...selectedLanguage} />
			<Img src={BottomArrow} alt="dropdown menu arrow" />
			<DropdownMenu active={isMenuOpen}>
				<LanguageMenu>
					{options.map((option, i) => (
						<LanguageLabel
							key={option.id}
							{...option}
							onLanguageSelect={handleSelect(i)}
							isMenuItem
						/>
					))}
				</LanguageMenu>
			</DropdownMenu>
		</Switcher>
	);
};

export default LanguageSwitcher;
