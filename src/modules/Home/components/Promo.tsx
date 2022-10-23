import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from 'src/common/components/_ui/Button/Button';
import ContentLayout from 'src/modules/Home/components/ContentLayout/ContentLayout';

import { PathsEnum } from 'src/common/utils/constants/paths';
import Glass from 'public/assets/images/thumbnails/glass.webp';
import { useTranslations } from 'next-intl';

interface PromoProps {
	big: boolean;
}

const Promo = ({ big }: PromoProps) => {
	const { push } = useRouter();
	const t = useTranslations('promo');

	const goToProducts = () => {
		push(PathsEnum.Products);
	};

	return (
		<ContentLayout
			title={t('title')}
			text={t('text')}
			button={
				<Button onClick={goToProducts} small={!big}>
					{t('button')}
				</Button>
			}
			big={big}
			justify="center"
			content={<Image src={Glass} alt={'glass image'} />}
			direction={big ? 'row' : 'column-reverse'}
		/>
	);
};

export default Promo;
