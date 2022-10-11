import styled from '@emotion/styled';
import { mediaQueries } from '@/utils/constants/mediaQueries';
import { css } from '@emotion/react';

export const CarouselContainer = styled.div`
	${({ theme }) => css`
		&&& .thumbs {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&&& .thumb {
			border: 1px solid ${theme.palette.white.light};
			background: ${theme.palette.white.extraLight};
		}
		&&& .selected.thumb {
			background: ${theme.palette.white.normal};
			border: 1px solid ${theme.palette.white.dark};
		}

		&&& .control-dots {
			display: flex;
			padding: 0 1rem;
		}
	`}
`;

export const BtnContainer = styled.div<{ align: 'left' | 'right' }>`
	position: absolute;
	${({ align }) => align}: 3%;
	top: calc(50%);
	transform: translateY(-50%);
	z-index: 3;
`;

export interface ControlButtonProps {
	active?: boolean;
}

export const ControlButton = styled.li<ControlButtonProps>`
	//position: relative;
	width: 100%;
	padding: 0.6rem 0 0.6rem 0;
	margin-right: 0.5rem;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	transition: 200ms all;
	background: transparent;
	cursor: pointer;

	&:last-child {
		margin-right: 0;
	}

	&:before {
		border-radius: 4px;
		width: 100%;
		height: 0.25rem;
		content: '';
		background: ${({ theme, active }) =>
			active ? theme.palette.active.normal : theme.palette.white.dark};
	}

	${mediaQueries.up.md} {
		padding: 0.85rem 0 0.85rem 0;
		&:before {
			height: 0.35rem;
		}
	}
`;
