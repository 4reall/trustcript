import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from '@/components/_ui/Button/Button';
import ContentLayout from '@/modules/Home/components/ContentLayout/ContentLayout';

import { PathsEnum } from '@/utils/constants/paths';
import Glass from '@/assets/images/glass.webp';

interface PromoProps {
	title: string;
	text: string;
	buttonText: string;
	big: boolean;
}

const Promo = ({ title, big, text, buttonText }: PromoProps) => {
	const { push } = useRouter();

	const goToProducts = () => {
		push(PathsEnum.Products);
	};

	return (
		<ContentLayout
			title={title}
			text={text}
			button={
				<Button onClick={goToProducts} small={!big}>
					{buttonText}
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
