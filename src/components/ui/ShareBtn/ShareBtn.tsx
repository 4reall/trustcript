import {
	Btn,
	Circle,
	CopiedText,
	LinksContainer,
	Rectangle,
	ShareBtnContainer,
} from 'components/ui/ShareBtn/ShareBtn.styles';
import { ReactComponent as Share } from 'assets/icons/shareBtn/Share.svg';
import { ReactComponent as Fb } from 'assets/icons/shareBtn/Fb.svg';
import { ReactComponent as Tw } from 'assets/icons/shareBtn/Tw.svg';
import { ReactComponent as Copy } from 'assets/icons/shareBtn/Copy.svg';
import { useState, MouseEvent, useRef, useEffect } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { Typography } from 'components/layout/Typography.styles';

interface ShareBtnProps {
	link: string;
	vertical?: boolean;
}

const ShareBtn = ({ link, vertical }: ShareBtnProps) => {
	const [active, setActive] = useState(false);
	const [copied, setCopied] = useState(false);
	const containerRef = useRef(null);

	const handleClick = (e: MouseEvent) => {
		// e.preventDefault();
		// if (e.target === e.currentTarget) setActive(!active);
		setActive(!active);
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(link).then(() => setCopied(true));
	};

	useEffect(() => {
		if (copied) setTimeout(() => setCopied(false), 1500);
	}, [copied]);

	useClickOutside(containerRef, () => {
		if (active) setActive(false);
	});

	return (
		<ShareBtnContainer
			ref={containerRef}
			active={active}
			vertical={vertical}
			copied={copied}
		>
			<Btn onClick={handleClick}>
				<Share />
			</Btn>
			<Circle />
			<Rectangle />
			<LinksContainer>
				<a
					target={'_blank'}
					rel="noreferrer"
					href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
				>
					<Fb />
				</a>
				<a
					target={'_blank'}
					rel="noreferrer"
					href={`https://twitter.com/intent/tweet?url=${link}&text=`}
				>
					<Tw />
				</a>
				<Copy onClick={handleCopy} />
			</LinksContainer>
			<CopiedText>
				<Typography variant="h5" uppercase display="block">
					Скопировано!
				</Typography>
			</CopiedText>
		</ShareBtnContainer>
	);
};

export default ShareBtn;
