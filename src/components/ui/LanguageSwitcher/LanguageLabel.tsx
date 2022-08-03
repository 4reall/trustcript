import { Typography } from 'components/layout/Typography.styles';
import { LanguageLabelContainer } from 'components/ui/LanguageSwitcher/LanguageSwitcher.styles';

import { LanguageLabelContainerProps } from 'components/ui/LanguageSwitcher/LanguageSwitcher.styles';
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
			{thumbnail}
			<Typography variant="h4">{language}</Typography>
		</LanguageLabelContainer>
	);
};

export default LanguageLabel;
