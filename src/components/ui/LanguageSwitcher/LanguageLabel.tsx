import { Image } from 'components/layout/Image.styles';
import { Typography } from 'components/layout/Typography.styles';
import {
	LanguageLabelContainer,
	LanguageLabelContainerProps,
} from 'components/ui/LanguageSwitcher/LanguageSwitcher.styles';
import { LanguageOption } from 'context/LanguageContext/Language.context';

interface LanguageLabelProps
	extends LanguageOption,
		LanguageLabelContainerProps {
	onLanguageSelect?: () => void;
}

const LanguageLabel = ({
	language,
	thumbnail,
	onLanguageSelect,
	isMenuItem,
}: LanguageLabelProps) => {
	return (
		<LanguageLabelContainer
			as={isMenuItem ? 'li' : 'div'}
			onClick={onLanguageSelect}
			isMenuItem={isMenuItem}
		>
			<Image src={thumbnail} alt={language + 'language icon'} />
			<Typography variant="h4">{language}</Typography>
		</LanguageLabelContainer>
	);
};

export default LanguageLabel;
