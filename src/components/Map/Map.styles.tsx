import styled from 'styled-components';

export const MapContainer = styled.div`
	position: relative;
	border-radius: 20px;
	border: 1px solid ${({ theme }) => theme.palette.active.normal};
	overflow: hidden;
	.ymaps-2-1-79-gototaxi,
	.ymaps-2-1-79-gototech,
	.ymaps-2-1-79-copyright__wrap {
		display: none;
	}
	.ymaps-2-1-79-ground-pane {
		filter: invert(1) grayscale(1);
		-webkit-filter: invert(1) grayscale(1);
		-moz-filter: invert(1) grayscale(1);
		-o-filter: invert(1) grayscale(1);
	}
`;
