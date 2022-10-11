import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ErrorMessage = styled.p`
	${({ theme }) => css`
		margin-top: 0.75rem;
		//position: absolute;
		//bottom: 0;
		//transform: translateY(130%);
		font-size: ${theme.typography.error.fontSize.small};
		font-family: ${theme.typography.error.fontFamily};
		font-weight: 500;
		line-height: ${theme.typography.error.lineHeight.small};
		text-transform: ${theme.typography.error.textTransform};
		color: ${theme.typography.error.color};
	`}
`;
