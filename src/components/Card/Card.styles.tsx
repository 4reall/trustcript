import styled from 'styled-components';
import { ButtonBase } from 'components/ui/Button/Button.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const CardContainer = styled.div`
	//max-width: 25rem;
	padding: 1rem;
	background: ${({ theme }) => theme.palette.white.light};
	border-radius: 20px;
	border: 1px solid ${({ theme }) => theme.palette.white.normal};
`;

export const ContentContainer = styled.div`
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	overflow: hidden;
	& ${ButtonBase} {
		width: 2rem;
		height: 2rem;
	}
	${mediaQueries.up.md} {
		& ${ButtonBase} {
			width: 3rem;
			height: 3rem;
		}
	}
`;

export const TextContainer = styled.div`
	& > * {
		display: block;
		margin-bottom: 0.5rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
`;
