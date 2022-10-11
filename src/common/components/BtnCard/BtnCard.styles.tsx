import styled from '@emotion/styled';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ImgContainer = styled.div`
	position: relative;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.palette.white.light};
	background: ${({ theme }) => theme.palette.white.extraLight};
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const TextContainer = styled.div`
	margin: 1rem 0 0 1rem;
`;
