import { ScreenContainer } from 'pages/Share.styles';
import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';

export const ContactsContainer = styled(ScreenContainer)`
	width: min(100%, 60rem);
	display: block;

	${mediaQueries.up.md} {
		margin: 0 auto;
	}
`;

export const ContentContainer = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.palette.active.normal};
	& > * {
		width: 100%;
	}

	${mediaQueries.up.md} {
		flex-direction: row;
		align-items: stretch;
		padding: 1rem;
		display: flex;
		& > * {
			width: 50%;
		}
	}
`;

export const MapContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 1rem 0 0 0;
	& div {
		&:nth-child(2) {
			margin-top: 1rem;
			flex: 1;
		}
	}

	${mediaQueries.up.md} {
		margin: 0 0 0 1rem;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Link = styled.a`
	display: flex;
	margin-top: 1rem;
	color: white;
	text-decoration: none;
	&:first-child {
		margin-top: 0;
	}
	& img {
		margin-right: 0.5rem;
	}
`;
