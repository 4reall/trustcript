import styled from 'styled-components';

export const FormStyles = styled.form`
	& > * {
		margin-top: 1rem;
		&:first-child {
			margin-top: 0;
		}
	}
`;

export const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	& > span {
		margin-left: 0.5rem;
	}
	& > label {
		flex-shrink: 0;
	}
`;
