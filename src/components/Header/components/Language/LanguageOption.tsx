import { LanguageOptionStyles } from 'components/Header/components/Language/Language.styles';
import { IOption } from 'components/Header/components/Language/LanguageSelect';
import { Image } from 'components/layout/Image.styles';
import { TypographyStyles } from 'components/layout/Typography.styles';

export const LanguageOption = ({ value, label, src, alt }: IOption) => {
	return (
		<LanguageOptionStyles isMenu>
			<Image src={src} alt={alt} />
			<TypographyStyles variant="h4">{label}</TypographyStyles>
		</LanguageOptionStyles>
	);
};

// export const LanguageSingleValue = ({
// 	innerProps,
// 	data,
// }: SingleValueProps<IOption>) => {
// 	return (
// 		<div {...innerProps}>
// 			<LanguageOptionStyles isMenu>
// 				<Image src={data.src} alt={data.alt} />
// 				<TypographyStyles variant="h4">{data.label}</TypographyStyles>
// 			</LanguageOptionStyles>
// 		</div>
// 	);
// };
