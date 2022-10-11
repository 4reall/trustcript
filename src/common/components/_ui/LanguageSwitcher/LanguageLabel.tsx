import { Typography } from '@/layout/Typography.styles';
import { LanguageLabelContainer } from '@/components/_ui/LanguageSwitcher/LanguageSwitcher.styles';

import { LanguageLabelContainerProps } from '@/components/_ui/LanguageSwitcher/LanguageSwitcher.styles';
import { LanguageOption } from '@/context/LanguageContext/Language.context';

interface LanguageLabelBaseProps {
	onLanguageSelect?: () => void;
}

type LanguageLabelProps = LanguageOption &
	LanguageLabelContainerProps &
	LanguageLabelBaseProps;

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
			<div>{thumbnail}</div>
			<Typography variant="h4">{language}</Typography>
		</LanguageLabelContainer>
	);
};

export default LanguageLabel;
