import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const PromoContainer = styled.article`
	padding: 2rem;
	display: flex;
	flex-direction: column-reverse;

	img {
		display: block;
		margin: 0 auto;
		width: 100%;
		object-fit: contain;
	}

	${mediaQueries.up.md} {
		flex-direction: row;
		justify-content: space-between;
		& img {
			width: 50%;
		}
	}
`;

export const PromoText = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 2rem 0;
	${mediaQueries.up.md} {
		width: 50%;
		padding: 0 1rem 0 0;
	}
`;
