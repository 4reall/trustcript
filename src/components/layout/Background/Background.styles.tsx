import styled from 'styled-components';

export const Background = styled.div<{ url: string }>`
	position: absolute;
	min-width: 100vw;
	min-height: 100vh;
	background: url(${({ url }) => url}) center / cover no-repeat;
	z-index: -1000;
`;
