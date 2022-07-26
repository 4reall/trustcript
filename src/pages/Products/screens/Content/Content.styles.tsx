import styled from 'styled-components';
import { PaginationContainer } from 'components/ui/Pagination/Pagination.styles';

export const ContentContainer = styled.div`
	position: relative;

	${PaginationContainer} {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
`;
