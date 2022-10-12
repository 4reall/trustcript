import {
	Circle,
	CopiedText,
	CopyBtn,
	Link,
	Rectangle,
	Btn,
	ShareBtnContainer,
	Sizes,
} from '@/components/_ui/ShareButton/ShareButton.styles';
import { ReactNode, useEffect, useRef, useState } from 'react';
import Share from '@/assets/icons/shareBtn/Share.svg';
import Copy from '@/assets/icons/shareBtn/Copy.svg';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Typography } from '@/layout/Typography.styles';
import Image from 'next/image';

export interface IIconLink {
	icon: string;
	href: string;
}

interface ShareBtnProps {
	transition?: number;
	links: IIconLink[];
	vertical?: boolean;
	size?: Sizes;
}

const ShareButton = ({
	transition = 300,
	links,
	vertical,
	size = 'md',
}: ShareBtnProps) => {
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
				<Image
					src={Share}
					width={size === 'sm' ? 22 : 27}
					height={size === 'sm' ? 22 : 27}
				/>
			</Btn>
			<Circle />
			<Rectangle>
				{links.map(({ href, icon }) => (
					<Link key={href} href={href} target={'_blank'}>
						<Image
							src={icon}
							width={size === 'sm' ? 25 : 30}
							height={size === 'sm' ? 25 : 30}
						/>
					</Link>
				))}
				<CopyBtn onClick={handleCopy}>
					<Image
						src={Copy}
						width={size === 'sm' ? 25 : 30}
						height={size === 'sm' ? 25 : 30}
					/>
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

export default ShareButton;
