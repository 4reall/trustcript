import styled from '@emotion/styled';
import { Typography } from '@/common/layout/Typography.styles';
import { css } from '@emotion/react';

const sizeMap = {
	sm: 2.5,
	md: 3,
};

export type Sizes = keyof typeof sizeMap;

interface ShareBtnContainerProps {
	isOpen: boolean;
	size: Sizes;
	iconCount: number;
	isClose: boolean;
	copied: boolean;
	transition?: number;
	vertical?: boolean;
}

export const Btn = styled.button`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: none;
	background: ${({ theme }) => theme.palette.active.normal};
	z-index: 1;
	outline: none;

	&:focus-visible {
		box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.normal.hover};
	}

	img {
		opacity: 0;
	}
`;

export const Rectangle = styled.span`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	background: ${({ theme }) => theme.palette.active.normal};
	overflow: hidden;
	z-index: 3;
`;

export const Circle = styled.span`
	position: absolute;
	left: 0;
	display: block;
	border-radius: 50%;
	background: ${({ theme }) => theme.palette.active.normal};
	z-index: 1;
`;

export const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CopyBtn = styled.button`
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: 50%;
	background: none;
	cursor: pointer;
`;

export const CopiedText = styled.span`
	display: none;
`;

export const ShareBtnContainer = styled.div<ShareBtnContainerProps>`
	${({
		isOpen,
		size,
		iconCount,
		transition,
		isClose,
		copied,
		vertical,
	}) => css`
		position: relative;
		width: ${sizeMap[size]}rem;
		height: ${sizeMap[size]}rem;

		${Rectangle} {
			${vertical
				? css`
						width: ${sizeMap[size]}rem;
						top: 50%;
						height: 0;
						flex-direction: column;
						& > * {
							margin-top: 0.5rem;
							opacity: 0;
							&:first-of-type {
								margin-top: 0;
							}
						}
						${Typography} {
							writing-mode: vertical-rl;
							text-orientation: mixed;
							display: none;
							margin: 0;
						}
				  `
				: css`
						width: 0;
						left: 50%;
						height: 100%;
						& > * {
							margin-left: 0.5rem;
							opacity: 0;
							&:first-of-type {
								margin-left: 0;
							}
						}
						& > ${Typography} {
							display: none;
							margin: 0;
						}
				  `}
			transition: ${transition}ms;

			img {
				flex-shrink: 0;
				width: ${sizeMap[size] / 1.5}rem;
				height: ${sizeMap[size] / 1.5}rem;
			}
		}
		${Circle} {
			transition: ${transition}ms;
			width: ${sizeMap[size]}rem;
			height: ${sizeMap[size]}rem;
			bottom: 0;
		}
		${Btn} {
			width: ${sizeMap[size]}rem;
			height: ${sizeMap[size]}rem;
		}

		${isOpen &&
		css`
			${Rectangle} {
				${vertical
					? css`
							width: ${sizeMap[size]}rem;
							height: ${sizeMap[size] * 0.85 * iconCount}rem;
					  `
					: css`
							width: ${sizeMap[size] * 0.85 * iconCount}rem;
					  `}

				& > * {
					transition: ${transition}ms;
					opacity: 1;
				}
			}
			${Circle} {
				${vertical
					? css`
							bottom: -${sizeMap[size] * 0.85 * iconCount}rem;
					  `
					: css`
							left: ${sizeMap[size] * 0.85 * iconCount}rem;
					  `}
			}
		`}

		${isClose &&
		css`
			${Btn} {
				z-index: 2;
				img {
					opacity: 1;
				}
			}
		`}
		
		${copied &&
		css`
			${Rectangle} {
				& > * {
					display: none;
					&:last-child {
						margin-left: 0;
						display: block;
					}
				}
			}
		`}
	`}
`;
