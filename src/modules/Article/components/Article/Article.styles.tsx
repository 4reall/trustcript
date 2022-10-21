import styled from '@emotion/styled';
import { mediaQueries } from '@/common/utils/constants/mediaQueries';

export const ArticleContainer = styled.div`
	& img {
		width: 100%;
	}
	${mediaQueries.up.md} {
		margin-right: 2rem;
		width: 60%;
	}
`;

export const LabelsContainer = styled.div`
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	& > *:last-child {
		justify-self: end;
	}
	${mediaQueries.up.md} {
		& > *:last-child {
			justify-self: stretch;
		}
	}
`;

export const ImageContainer = styled.div`
	margin-top: 1rem;
	position: relative;
`;
export const ContentContainer = styled.div`
	& img {
		margin-top: 1rem;
	}
	& > * {
		width: 100%;
	}
`;
