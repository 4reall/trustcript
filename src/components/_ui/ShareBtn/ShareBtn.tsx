import {
	Circle,
	CopiedText,
	CopyBtn,
	Link,
	Rectangle,
	Btn,
	ShareBtnContainer,
	Sizes,
} from 'components/_ui/ShareBtn/ShareBtn.styles';
import { ReactComponent as Share } from 'assets/icons/shareBtn/Share.svg';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { ReactComponent as Copy } from 'assets/icons/shareBtn/Copy.svg';
import { useClickOutside } from 'hooks/useClickOutside';
import { useLocation } from 'react-router-dom';
import { Typography } from 'components/_layout/Typography.styles';

export interface IIconLink {
	icon: ReactNode;
	href: string;
}

interface ShareBtnProps {
	transition: number;
	links: IIconLink[];
	vertical: boolean;
	size?: Sizes;
}

const ShareBtn = ({
	transition,
	links,
	vertical,
	size = 'md',
}: ShareBtnProps) => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	const [copied, setCopied] = useState(false);
	const [isClose, setIsClose] = useState(false);
	const [isOpening, setIsOpening] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleCopy = () => {
		navigator.clipboard
			.writeText(location.pathname)
			.then(() => setCopied(true));
	};

	useEffect(() => {
		setIsOpening(true);
		setTimeout(() => setIsOpening(false), transition);

		if (isOpen) {
			setIsClose(false);
		} else {
			setTimeout(() => setIsClose(true), transition);
		}
	}, [isOpen]);

	useEffect(() => {
		if (copied) setTimeout(() => setCopied(false), 1500);
	}, [copied]);

	const handleOpen = () => {
		if (!isOpening) setIsOpen(!isOpen);
	};

	useClickOutside(containerRef, () => isOpen && setIsOpen(false));

	return (
		<ShareBtnContainer
			ref={containerRef}
			isOpen={isOpen}
			isClose={isClose}
			size={size}
			iconCount={links.length + 1}
			transition={transition}
			copied={copied}
			vertical={vertical}
		>
			<Btn onClick={handleOpen}>
				<Share />
			</Btn>
			<Circle />
			<Rectangle>
				{links.map(({ href, icon }) => (
					<Link href={href} target={'_blank'}>
						{icon}
					</Link>
				))}
				<CopyBtn onClick={handleCopy}>
					<Copy />
				</CopyBtn>
				<Typography
					variant={size === 'sm' ? 'h5' : 'h4'}
					display="block"
				>
					Скопировано!
				</Typography>
			</Rectangle>
		</ShareBtnContainer>
	);
};

export default ShareBtn;
