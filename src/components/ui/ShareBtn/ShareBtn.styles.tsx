import styled, { css } from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export interface ShareBtnContainerProps {
	active?: boolean;
	vertical?: boolean;
	copied?: boolean;
}

export const Circle = styled.div`
	${({ theme }) => css`
		position: absolute;
		left: 0;
		width: 2.5rem;
		height: 2.5rem;
		background: ${theme.palette.active.normal};
		border-radius: 50%;
		transition: 200ms all;
		pointer-events: none;
	`}
`;

export const Rectangle = styled.div`
	${({ theme }) => css`
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: end;
		background: ${theme.palette.active.normal};
		height: 2.5rem;
		width: 1px;
		transition: 200ms all;
		transform-origin: left;
		pointer-events: none;
	`}
`;
export const LinksContainer = styled.div`
	position: absolute;
	width: 6rem;
	left: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: 150ms all;
	visibility: hidden;
	opacity: 0;

	& svg {
		width: 1.5rem;
		height: 1.5rem;
		cursor: pointer;
	}

	& a {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const Btn = styled.button`
	${({ theme }) => css`
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${theme.palette.active.normal};
		border-radius: 50%;
		border: none;
		cursor: pointer;
		transition: 200ms all;
		z-index: 100;
		& > svg {
			pointer-events: none;
			z-index: 2;
		}
	`}
`;

export const CopiedText = styled.div`
	position: absolute;
	left: 3.5rem;
	width: 7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	visibility: hidden;
`;

export const ShareBtnContainer = styled.div<ShareBtnContainerProps>`
	${({ theme, active, vertical, copied }) => css`
		position: relative;
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		// background: ${theme.palette.active.normal};
		// border-radius: 50%;
		// border: none;
		// cursor: pointer;
		// transition: 200ms all;
		// & > svg {
		// 	pointer-events: none;
		// 	z-index: 2;
		// }

		${copied &&
		css`
			${CopiedText} {
				visibility: visible;
			}
			${LinksContainer} {
				display: none;
			}
		`}

		${vertical &&
		css`
			${Rectangle} {
				width: 2.5rem;
				height: 1px;
				transform-origin: top;
			}
			${LinksContainer} {
				left: 0;
				top: 2rem;
				width: 2.5rem;
				height: 6rem;
				flex-direction: column;
			}
		`}

		${active &&
		!vertical &&
		css`
			${Circle} {
				transform: translateX(7rem);
			}
			${Rectangle} {
				transform: scaleX(112);
			}
			${LinksContainer} {
				visibility: visible;
				opacity: 1;
				left: 2.5rem;
			}
		`}
		
		${active &&
		vertical &&
		css`
			${Circle} {
				transform: translateY(7rem);
			}
			${Rectangle} {
				transform: scaleY(112);
			}
			${LinksContainer} {
				visibility: visible;
				opacity: 1;
				left: 0;
				top: 2.5rem;
			}
		`} 

		${mediaQueries.up.md} {
			width: 3rem;
			height: 3rem;
			${Btn} {
				width: 3rem;
				height: 3rem;
			}
			${Circle} {
				width: 3rem;
				height: 3rem;
			}
			${Rectangle} {
				width: 1px;
				height: 3rem;
			}
			${LinksContainer} {
				& svg {
					width: 2rem;
					height: 2rem;
				}
			}
			${vertical &&
			css`
				${Rectangle} {
					width: 3rem;
					height: 1px;
					transform-origin: top;
				}
				${LinksContainer} {
					left: 0;
					top: 3.5rem;
					width: 3rem;
					height: 7rem;
					flex-direction: column;
				}
			`}
			${active &&
			!vertical &&
			css`
				${Circle} {
					transform: translateX(9rem);
				}
				${Rectangle} {
					transform: scaleX(144);
				}
				${LinksContainer} {
					visibility: visible;
					width: 7rem;
					opacity: 1;
					left: 3.5rem;
				}
			`}

			${active &&
			vertical &&
			css`
				${Circle} {
					transform: translateY(9rem);
				}
				${Rectangle} {
					transform: scaleY(144);
				}
				${LinksContainer} {
					visibility: visible;
					opacity: 1;
					left: 0;
					top: 3.5rem;
				}
			`}
		}
	`}
`;
