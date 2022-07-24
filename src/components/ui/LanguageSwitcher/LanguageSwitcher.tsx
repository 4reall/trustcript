import { useContext, useRef, useState } from 'react';

import { Image } from 'components/layout/Image.styles';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import {
	LanguageMenu,
	Switcher,
} from 'components/ui/LanguageSwitcher/LanguageSwitcher.styles';
import LanguageLabel from 'components/ui/LanguageSwitcher/LanguageLabel';

import { SwitcherProps } from 'components/ui/LanguageSwitcher/LanguageSwitcher.styles';
import { LanguageOption } from 'context/LanguageContext/Language.context';

import { languageContext } from 'context/LanguageContext/Language.context';
import { useClickOutside } from 'hooks/useClickOutside';

import Arrow from 'assets/icons/arrows/Vector.svg';

interface LanguageSwitcherProps extends SwitcherProps {
	options: LanguageOption[];
}

const LanguageSwitcher = ({ options, mx }: LanguageSwitcherProps) => {
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
		<Switcher mx={mx} ref={containerRef} onClick={handleClick}>
			<LanguageLabel {...selectedLanguage} />
			<Image src={Arrow} alt="dropdown menu arrow" />
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
