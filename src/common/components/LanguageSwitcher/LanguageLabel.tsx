import { Typography } from '@/layout/Typography.styles';
import { LanguageLabelContainer } from '@/components/LanguageSwitcher/LanguageSwitcher.styles';

import { LanguageLabelContainerProps } from '@/components/LanguageSwitcher/LanguageSwitcher.styles';
import { ComponentProps, ElementType } from 'react';
import { ILanguageOption } from 'src/common/components/LanguageSwitcher/LanguageSwitcher';
import Image from 'next/image';

interface LanguageLabelOwnProps<TTag extends ElementType = ElementType> {
	languageOption: ILanguageOption;
	onClick?: ComponentProps<TTag>['onClick'];
	as?: TTag;
}

type LanguageLabelProps<TTag extends ElementType> =
	LanguageLabelOwnProps<TTag> & LanguageLabelContainerProps;

const defaultElement = 'div';

const LanguageLabel = <TTag extends ElementType = typeof defaultElement>({
	isMenuItem,
	onClick,
	languageOption,
	as,
}: LanguageLabelProps<TTag>) => {
	return (
		<LanguageLabelContainer
			onClick={onClick}
			isMenuItem={isMenuItem}
			as={as}
		>
			<Image src={languageOption.image.src} />
			<Typography m={[0, 0, 0, '0.25rem']} variant="h4">
				{languageOption.label}
			</Typography>
		</LanguageLabelContainer>
	);
};

export default LanguageLabel;
