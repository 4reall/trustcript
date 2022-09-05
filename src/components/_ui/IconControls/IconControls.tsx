import {
	IconControlsBtn,
	IconControlsContainer,
} from 'components/_ui/IconControls/IconControls.styles';
import { Img } from 'components/_layout/Img.styles';
import Button from 'components/_ui/Button/Button';

import { CarouselControls } from 'components/Carousel/Carousel';
import { IImage } from 'types/Image';

import { ReactComponent as LeftArrow } from 'assets/icons/arrows/LeftArrow.svg';
import { ReactComponent as RightArrow } from 'assets/icons/arrows/RightArrow.svg';

interface IconControlsProps {
	icons: IImage[];
	arrows?: boolean;
}

const IconControls = ({
	activeControl,
	onClick,
	icons,
	moveToLeft,
	moveToRight,
	disabled,
	arrows,
}: IconControlsProps & CarouselControls) => {
	return (
		<IconControlsContainer>
			{arrows && (
				<Button disabled={disabled} onClick={moveToLeft} icon>
					<LeftArrow />
				</Button>
			)}
			{icons.map((icon, i) => (
				<IconControlsBtn
					key={i}
					onClick={() => onClick(i)}
					active={activeControl === i}
				>
					<Img {...icon} />
				</IconControlsBtn>
			))}
			{arrows && (
				<Button disabled={disabled} onClick={moveToRight} icon>
					<RightArrow />
				</Button>
			)}
		</IconControlsContainer>
	);
};

export default IconControls;
