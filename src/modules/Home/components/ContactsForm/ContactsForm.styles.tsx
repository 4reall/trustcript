import styled from '@emotion/styled';

export const ContactsFormStyles = styled.form`
	& > * {
		margin-top: 0.75rem;
		&:first-of-type {
			margin-top: 0;
		}
	}
`;

export const CheckboxContainer = styled.div`
	display: flex;
	& > span {
		margin-left: 0.5rem;
	}
	& > label {
		flex-shrink: 0;
	}
`;
