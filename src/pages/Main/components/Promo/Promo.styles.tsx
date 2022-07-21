import styled from 'styled-components';
import { mediaQueries } from 'utils/constants/mediaQueries';
import {
	ScreenContainer,
	TextContent,
} from 'pages/Main/components/Share.styles';

export const PromoContainer = styled(ScreenContainer)`
	img {
		display: block;
		margin: 0 auto;
		width: 100%;
		object-fit: contain;
	}

	${TextContent} {
		padding: 2rem 0;
		${mediaQueries.up.md} {
			padding: 0 2rem 0 0;
		}
	}

	${mediaQueries.up.md} {
		& img {
			width: 50%;
		}
	}
`;
