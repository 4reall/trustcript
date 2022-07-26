import { ButtonBase } from 'components/ui/Button/Button.styles';
import styled from 'styled-components';

export const FiltersContainer = styled.div`
	display: grid;
	//grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
	flex: 1;

	${ButtonBase} {
		width: 100%;
	}
`;
