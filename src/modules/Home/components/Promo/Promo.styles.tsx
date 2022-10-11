import styled from '@emotion/styled';
import { mediaQueries } from '@/utils/constants/mediaQueries';
import { ScreenContainer } from '@/layout/ScreenContainer.styles';

export const Container = styled(ScreenContainer)`
	padding-top: 0rem;
	display: flex;
	flex-direction: column-reverse;

	${mediaQueries.up.sm} {
		flex-direction: row;
	}
`;

export const TextContainer = styled.div`
	padding-right: 1rem;
	width: 100%;
	margin: 1rem 0 0 0;
	${mediaQueries.up.sm} {
		width: 50%;
		margin: 0;
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	img {
		width: 100%;
		object-fit: contain;
	}

	${mediaQueries.up.sm} {
		width: 50%;
	}
`;
