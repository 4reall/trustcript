import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const SimilarContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	${mediaQueries.up.md} {
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	${mediaQueries.up.md} {
		flex-direction: row;
	}
`;

export const ImgContainer = styled.div`
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.palette.white.light};
	background: ${({ theme }) => theme.palette.white.extraLight};
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		height: 90%;
		width: 90%;
	}
	${mediaQueries.up.md} {
		width: 40%;
	}
`;

export const TextContainer = styled.div`
	margin: 1rem 0 0 1rem;
	${mediaQueries.up.md} {
		margin-top: 0;
		width: 60%;
	}
`;
