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
		${mediaQueries.up.md} {
			width: 3rem;
			height: 3rem;
		}
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
		${mediaQueries.up.md} {
			width: 1px;
			height: 3rem;
		}
	`}
`;
export const LinksContainer = styled.div`
	position: absolute;
	width: 0;
	left: 0.75rem;
	display: flex;
	align-items: center;
	transition: 150ms all;
	visibility: hidden;
	opacity: 0;
	overflow: hidden;
	z-index: 3;

	& > * {
		margin: 0 0.5rem 0 0;
		&:last-child {
			margin: 0;
		}
	}

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

	${mediaQueries.up.md} {
		width: 0;
		& svg {
			width: 2rem;
			height: 2rem;
		}
		& > * {
			margin: 0 0.5rem 0 0;
			&:last-child {
				margin: 0;
			}
		}
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
		z-index: 1;
		opacity: 1;
		& > svg {
			pointer-events: none;
		}
		${mediaQueries.up.md} {
			width: 3rem;
			height: 3rem;
		}
	`}
`;

export const CopiedText = styled.div`
	position: absolute;
	left: 0;
	width: 7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	visibility: hidden;
	z-index: 3;
	${mediaQueries.up.md} {
		width: 9rem;
	}
`;

export const ShareBtnContainer = styled.div<ShareBtnContainerProps>`
	${({ active, vertical, copied }) => css`
		position: relative;
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;

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
				top: 0.75rem;
				width: 2.5rem;
				height: 0;
				flex-direction: column;
				& > * {
					margin: 0 0 0.5rem 0;
					&:last-child {
						margin: 0;
					}
				}
			}
			${CopiedText} {
				top: 0;
				width: 2.5rem;
				height: 7rem;
				writing-mode: vertical-rl;
				text-orientation: mixed;
			}
		`}
		${active &&
		vertical &&
		css`
			${Circle} {
				transform: translateY(4.5rem);
			}
			${Rectangle} {
				transform: scaleY(72);
			}
			${LinksContainer} {
				height: 6rem;
				visibility: visible;
				opacity: 1;
				left: 0;
				top: 0.75rem;
			}
			${Btn} {
				& svg {
					opacity: 0;
				}
			}
		`}

		
		${active &&
		!vertical &&
		css`
			${Circle} {
				transform: translateX(4.5rem);
			}
			${Rectangle} {
				transform: scaleX(72);
			}
			${LinksContainer} {
				visibility: visible;
				opacity: 1;
				left: 0.75rem;
				width: 6rem;
			}
			${Btn} {
				& svg {
					opacity: 0;
				}
			}
		`}



		${mediaQueries.up.md} {
			width: 3rem;
			height: 3rem;

			${vertical &&
			css`
				${Rectangle} {
					width: 3rem;
					height: 1px;
					transform-origin: top;
				}
				${LinksContainer} {
					left: 0;
					top: 1rem;
					width: 3rem;
					height: 0;
					flex-direction: column;
					& > * {
						margin: 0 0 0.5rem 0;
						&:last-child {
							margin: 0;
						}
					}
				}
				${CopiedText} {
					top: 0;
					width: 3rem;
					height: 9rem;
					writing-mode: vertical-rl;
					text-orientation: mixed;
				}
			`}
			${active &&
			!vertical &&
			css`
				${Circle} {
					transform: translateX(6rem);
				}
				${Rectangle} {
					transform: scaleX(96);
				}
				${LinksContainer} {
					visibility: visible;
					width: 7rem;
					opacity: 1;
					z-index: 1;
					left: 1rem;
				}
				${Btn} {
					& svg {
						display: none;
					}
				}
			`}

			${active &&
			vertical &&
			css`
				${Circle} {
					transform: translateY(6rem);
				}
				${Rectangle} {
					transform: scaleY(96);
				}
				${LinksContainer} {
					visibility: visible;
					opacity: 1;
					left: 0;
					height: 7rem;
					z-index: 1;
					top: 1rem;
				}
				${Btn} {
					& svg {
						display: none;
					}
				}
			`}
		}
	`}
`;
