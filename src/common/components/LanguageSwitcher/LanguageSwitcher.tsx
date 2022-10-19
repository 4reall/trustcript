import Image from 'next/image';
import { useContext, useRef, useState } from 'react';

import DropdownMenu from '@/components/DropdownMenu/DropdownMenu';
import {
	LanguageMenu,
	Select,
} from '@/components/LanguageSwitcher/LanguageSwitcher.styles';
import LanguageLabel from '@/components/LanguageSwitcher/LanguageLabel';
import { useClickOutside } from '@/hooks/useClickOutside';

import BottomArrow from '@/assets/icons/arrows/BottomArrow.svg';
import { IImage } from '@/types/Image';
import { useRouter } from 'next/router';
import { Locales } from '@/utils/constants/Locales';

export interface ILanguageOption {
	label: string;
	image: IImage;
	locale: Locales;
}

interface LanguageSwitcherProps {
	languageOptions: ILanguageOption[];
}

const LanguageSwitcher = ({ languageOptions }: LanguageSwitcherProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const { push, locale } = useRouter();
	const selectedOption = languageOptions.find((opt) => opt.locale === locale);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleSelect = (languageOption: ILanguageOption) => {
		if (languageOption.locale === locale) return;
		return () => push('', '', { locale: languageOption.locale });
	};
	useClickOutside(containerRef, () => setIsMenuOpen(false));

	return (
		<Select ref={containerRef} onClick={handleClick}>
			<LanguageLabel
				languageOption={selectedOption || languageOptions[0]}
			/>
			<Image src={BottomArrow} alt="dropdown menu arrow" />
			<DropdownMenu active={isMenuOpen}>
				<LanguageMenu>
					{languageOptions.map((option, i) => (
						<LanguageLabel
							key={option.locale}
							languageOption={option}
							onClick={handleSelect(option)}
							isMenuItem
							as="li"
						/>
					))}
				</LanguageMenu>
			</DropdownMenu>
		</Select>
	);
};

export default LanguageSwitcher;
