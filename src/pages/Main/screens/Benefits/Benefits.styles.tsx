import styled from 'styled-components';
import { ScreenContainer } from 'pages/Share.styles';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const BenefitsContainer = styled(ScreenContainer)`
	position: relative;
	flex-direction: column !important;
	align-items: center;
	text-align: center;
`;

export const CardsContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;

	flex-direction: column;
	${mediaQueries.up.md} {
		margin-top: 2rem;
		flex-direction: row;
	}
`;

export const CardContainer = styled.div`
	padding: 1rem;
	margin-top: 1rem;
	display: flex;
	align-items: center;
	flex-direction: row;
	border-radius: 1rem;
	border: 1px solid ${({ theme }) => theme.palette.active.normal};

	&:first-child {
		margin-top: 0;
	}

	${mediaQueries.up.md} {
		width: 30%;
		justify-content: center;
		align-items: center;
		padding: 2rem 1rem;
		flex-direction: column;
	}
`;

export const ImgContainer = styled.div`
	flex: 0 0 4rem;
	height: 4rem;
	padding: 0.5rem;
	margin-right: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: ${({ theme }) => theme.palette.white.normal};
	& img {
		width: 50%;
	}

	${mediaQueries.up.md} {
		padding: 0.5rem;
		flex: 0 0 6rem;
		width: 6rem;
		& img {
			width: 60%;
		}
	}
`;
